#!/usr/bin/env node

/**
 * S3 Upload Script
 * Uploads the static export from the 'out' folder to AWS S3
 * 
 * Usage:
 *   node scripts/upload-to-s3.js [bucket-name] [options]
 *   S3_BUCKET_NAME=my-bucket node scripts/upload-to-s3.js
 * 
 * Credentials (uses AWS SDK default credential provider chain):
 *   - Environment variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
 *   - AWS credentials file: ~/.aws/credentials (via AWS CLI)
 *   - IAM roles (if running on EC2)
 * 
 * Environment Variables (optional):
 *   S3_BUCKET_NAME - Name of your S3 bucket (or pass as argument)
 *   AWS_REGION - AWS region (default: us-east-1)
 *   S3_BUCKET_PATH - Optional path prefix in bucket (default: '')
 *   S3_CLEANUP - Set to 'false' to disable cleanup (default: 'true')
 */

const { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

// Get bucket name from command line argument or environment variable
const BUCKET_NAME = process.argv[2] || process.env.S3_BUCKET_NAME;
const BUCKET_PATH = process.env.S3_BUCKET_PATH || '';
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const OUT_DIR = path.join(process.cwd(), 'out');

// Validate required bucket name
if (!BUCKET_NAME) {
  console.error('❌ Error: S3 bucket name is required');
  console.error('\nUsage:');
  console.error('  node scripts/upload-to-s3.js <bucket-name>');
  console.error('  or');
  console.error('  S3_BUCKET_NAME=my-bucket node scripts/upload-to-s3.js');
  console.error('\nCredentials will be loaded from:');
  console.error('  - Environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)');
  console.error('  - AWS credentials file (~/.aws/credentials)');
  console.error('  - IAM roles (if running on EC2)');
  process.exit(1);
}

// Check if out directory exists
if (!fs.existsSync(OUT_DIR)) {
  console.error(`❌ Error: ${OUT_DIR} directory does not exist. Please run 'npm run build' first.`);
  process.exit(1);
}

// Initialize S3 client with default credential provider chain
// This will automatically use AWS CLI credentials if available
const s3Client = new S3Client({
  region: AWS_REGION,
  // Credentials will be loaded automatically from:
  // 1. Environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
  // 2. AWS credentials file (~/.aws/credentials)
  // 3. IAM roles (if on EC2)
});

/**
 * Get all files recursively from a directory
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Upload a single file to S3
 */
async function uploadFile(filePath) {
  const fileContent = fs.readFileSync(filePath);
  const relativePath = path.relative(OUT_DIR, filePath);
  const key = BUCKET_PATH 
    ? `${BUCKET_PATH.replace(/\/$/, '')}/${relativePath.replace(/\\/g, '/')}`
    : relativePath.replace(/\\/g, '/');
  
  const contentType = mime.lookup(filePath) || 'application/octet-stream';
  
  // For HTML files, ensure proper content type
  const finalContentType = filePath.endsWith('.html') 
    ? 'text/html; charset=utf-8' 
    : contentType;

  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: BUCKET_NAME,
      Key: key,
      Body: fileContent,
      ContentType: finalContentType,
      CacheControl: filePath.endsWith('.html') 
        ? 'no-cache, no-store, must-revalidate' 
        : 'public, max-age=31536000, immutable',
    },
  });

  try {
    await upload.done();
    return { key, success: true };
  } catch (error) {
    console.error(`Failed to upload ${key}:`, error.message);
    return { key, success: false, error: error.message };
  }
}

/**
 * Delete files from S3 that are not in the local out directory
 */
async function cleanupS3(filesToKeep) {
  try {
    const prefix = BUCKET_PATH ? `${BUCKET_PATH.replace(/\/$/, '')}/` : '';
    const listParams = {
      Bucket: BUCKET_NAME,
      Prefix: prefix,
    };

    const listedObjects = await s3Client.send(new ListObjectsV2Command(listParams));
    
    if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
      return;
    }

    const filesToDelete = listedObjects.Contents
      .map((item) => item.Key)
      .filter((key) => {
        const relativeKey = prefix ? key.replace(prefix, '') : key;
        return !filesToKeep.includes(relativeKey);
      });

    if (filesToDelete.length === 0) {
      return;
    }

    console.log(`\n🗑️  Cleaning up ${filesToDelete.length} old file(s) from S3...`);
    
    for (const key of filesToDelete) {
      try {
        await s3Client.send(new DeleteObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
        }));
        console.log(`   Deleted: ${key}`);
      } catch (error) {
        console.error(`   Failed to delete ${key}:`, error.message);
      }
    }
  } catch (error) {
    console.warn('⚠️  Warning: Could not cleanup old files:', error.message);
  }
}

/**
 * Main upload function
 */
async function uploadToS3() {
  console.log('🚀 Starting S3 upload...\n');
  console.log(`📦 Bucket: ${BUCKET_NAME}`);
  console.log(`📁 Path: ${BUCKET_PATH || '(root)'}`);
  console.log(`🌍 Region: ${AWS_REGION}`);
  console.log(`📂 Source: ${OUT_DIR}\n`);

  // Get all files from out directory
  const allFiles = getAllFiles(OUT_DIR);
  console.log(`📄 Found ${allFiles.length} file(s) to upload\n`);

  // Upload files
  const results = [];
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < allFiles.length; i++) {
    const file = allFiles[i];
    const relativePath = path.relative(OUT_DIR, file);
    process.stdout.write(`\r📤 Uploading [${i + 1}/${allFiles.length}] ${relativePath}...`);
    
    const result = await uploadFile(file);
    results.push(result);
    
    if (result.success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log('\n');

  // Summary
  console.log('\n📊 Upload Summary:');
  console.log(`   ✅ Success: ${successCount}`);
  if (failCount > 0) {
    console.log(`   ❌ Failed: ${failCount}`);
    results
      .filter((r) => !r.success)
      .forEach((r) => console.log(`      - ${r.key}: ${r.error}`));
  }

  // Cleanup old files (optional - can be disabled)
  if (process.env.S3_CLEANUP !== 'false') {
    const filesToKeep = results
      .filter((r) => r.success)
      .map((r) => {
        const prefix = BUCKET_PATH ? `${BUCKET_PATH.replace(/\/$/, '')}/` : '';
        return r.key.replace(prefix, '');
      });
    await cleanupS3(filesToKeep);
  }

  if (failCount === 0) {
    console.log('\n✅ Upload completed successfully!');
    console.log(`\n🌐 Your site should be available at:`);
    console.log(`   http://${BUCKET_NAME}.s3-website-${AWS_REGION}.amazonaws.com`);
    if (BUCKET_PATH) {
      console.log(`   (with path: /${BUCKET_PATH})`);
    }
  } else {
    console.log('\n⚠️  Upload completed with errors. Please check the output above.');
    process.exit(1);
  }
}

// Run the upload
uploadToS3().catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
