#!/usr/bin/env node

/**
 * Zip Out Folder Script
 * Creates a zip file of the 'out' folder containing the static export
 * 
 * Usage:
 *   node scripts/zip-out.js
 *   npm run zip:out
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUT_DIR = path.join(process.cwd(), 'out');
const ZIP_NAME = `out-${new Date().toISOString().split('T')[0]}.zip`;
const ZIP_PATH = path.join(process.cwd(), ZIP_NAME);

// Check if out directory exists
if (!fs.existsSync(OUT_DIR)) {
  console.error(`❌ Error: ${OUT_DIR} directory does not exist. Please run 'npm run build' first.`);
  process.exit(1);
}

// Check if out directory is empty
const files = fs.readdirSync(OUT_DIR);
if (files.length === 0) {
  console.error(`❌ Error: ${OUT_DIR} directory is empty. Please run 'npm run build' first.`);
  process.exit(1);
}

console.log('📦 Creating zip file of out folder...\n');
console.log(`📂 Source: ${OUT_DIR}`);
console.log(`📄 Output: ${ZIP_PATH}\n`);

try {
  // Use PowerShell Compress-Archive on Windows, zip command on Unix
  const isWindows = process.platform === 'win32';
  
  if (isWindows) {
    // PowerShell command for Windows
    const powershellCmd = `Compress-Archive -Path "${OUT_DIR}\\*" -DestinationPath "${ZIP_PATH}" -Force`;
    execSync(`powershell -Command "${powershellCmd}"`, { stdio: 'inherit' });
  } else {
    // zip command for Unix/Mac
    const zipCmd = `cd "${OUT_DIR}" && zip -r "${ZIP_PATH}" .`;
    execSync(zipCmd, { stdio: 'inherit' });
  }
  
  // Check if zip file was created
  if (fs.existsSync(ZIP_PATH)) {
    const stats = fs.statSync(ZIP_PATH);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`\n✅ Zip file created successfully!`);
    console.log(`   File: ${ZIP_NAME}`);
    console.log(`   Size: ${sizeInMB} MB`);
    console.log(`   Location: ${ZIP_PATH}`);
  } else {
    throw new Error('Zip file was not created');
  }
} catch (error) {
  console.error('\n❌ Error creating zip file:', error.message);
  console.error('\nAlternative: You can manually zip the out folder using:');
  console.error(`   Windows: Right-click on 'out' folder → Send to → Compressed (zipped) folder`);
  console.error(`   Mac/Linux: zip -r out.zip out/`);
  process.exit(1);
}
