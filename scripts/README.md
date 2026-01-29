# Deployment Scripts

## upload-to-s3.js

Uploads the static export from the `out/` folder to AWS S3.

### Prerequisites

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure AWS credentials (choose one method):
   
   **Option A: AWS CLI (Recommended)**
   ```bash
   aws configure
   ```
   This creates `~/.aws/credentials` which the script will automatically use.
   
   **Option B: Environment variables**
   ```bash
   export AWS_ACCESS_KEY_ID=your-access-key-id
   export AWS_SECRET_ACCESS_KEY=your-secret-access-key
   export AWS_REGION=us-east-1
   ```

### Usage

```bash
# Build and deploy (pass bucket name as argument)
npm run build
npm run deploy:s3 my-bucket-name

# Or set bucket name via environment variable
S3_BUCKET_NAME=my-bucket-name npm run deploy

# Or run directly
node scripts/upload-to-s3.js my-bucket-name

# With optional bucket path prefix
S3_BUCKET_NAME=my-bucket-name S3_BUCKET_PATH=subfolder npm run deploy:s3
```

### Features

- ✅ Uploads all files from `out/` directory to S3
- ✅ Sets proper content types (HTML, CSS, JS, images, etc.)
- ✅ Configures cache headers (long cache for assets, no cache for HTML)
- ✅ Cleans up old files from S3 (optional, can be disabled with `S3_CLEANUP=false`)
- ✅ Progress tracking and error reporting
- ✅ Supports bucket path prefixes

### Credentials

The script uses AWS SDK's default credential provider chain, which checks in this order:
1. Environment variables (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`)
2. AWS credentials file (`~/.aws/credentials` - created by `aws configure`)
3. IAM roles (if running on EC2)

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `S3_BUCKET_NAME` | Yes* | Name of your S3 bucket (can also be passed as command argument) |
| `AWS_REGION` | No | AWS region (default: `us-east-1`) |
| `S3_BUCKET_PATH` | No | Optional path prefix in bucket |
| `S3_CLEANUP` | No | Set to `false` to disable cleanup of old files (default: `true`) |

*Bucket name can be provided as:
- Command line argument: `node scripts/upload-to-s3.js my-bucket-name`
- Environment variable: `S3_BUCKET_NAME=my-bucket-name node scripts/upload-to-s3.js`
