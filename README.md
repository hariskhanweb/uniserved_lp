# Uniserved Minimal

A minimal Next.js project with the OEM Services page as the home page.

## Features

- Minimal dependencies (Next.js, React, Tailwind CSS, Lucide Icons, QR Code)
- Same styling guidelines as the original project
- Services page as the home page
- No header/footer for a clean, focused experience

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
uniserved_minimal/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Minimal layout without header/footer
│   │   ├── page.tsx        # Home page (services page content)
│   │   └── globals.css     # Same styling as original
│   └── components/
│       └── oem-service-lifecycle-section.tsx
├── public/
│   ├── oem-collage_02.png
│   ├── framework-oems.svg
│   └── framework-oems-mobile.svg
└── package.json
```

## Dependencies

- **next**: Next.js framework
- **react**: React library
- **lucide-react**: Icons
- **qrcode.react**: QR code generation
- **tailwindcss**: Styling
- **tw-animate-css**: Animation utilities

## Building & Deployment

### Static Export

This project is configured for static export. The build process generates static HTML files in the `out/` directory.

```bash
# Build and export static site
npm run build
# or
npm run export

# Output will be in: ./out/
```

### Deploy to AWS S3

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure AWS credentials (choose one method):**
   
   **Option A: AWS CLI (Recommended)**
   ```bash
   aws configure
   # Enter your AWS Access Key ID, Secret Access Key, and region
   ```
   
   **Option B: Environment variables**
   ```bash
   export AWS_ACCESS_KEY_ID=your-access-key-id
   export AWS_SECRET_ACCESS_KEY=your-secret-access-key
   export AWS_REGION=us-east-1
   ```

3. **Build and deploy:**
   ```bash
   # Build and deploy in one command (bucket name as argument)
   npm run build
   npm run deploy:s3 my-bucket-name
   
   # Or set bucket name via environment variable
   S3_BUCKET_NAME=my-bucket-name npm run deploy
   
   # Optional: Set bucket path prefix
   S3_BUCKET_NAME=my-bucket-name S3_BUCKET_PATH=subfolder npm run deploy:s3
   ```

4. **S3 Bucket Configuration:**
   - Enable "Static website hosting" in your S3 bucket settings
   - Set index document to: `index.html`
   - Set error document to: `404.html` or `not-found.html`
   - Configure bucket policy for public read access

5. **CloudFront (Recommended):**
   - Create a CloudFront distribution pointing to your S3 bucket
   - Set default root object to: `index.html`
   - Configure custom error pages (403/404 → `/404.html` with 200 response)

For more details, see `STATIC_EXPORT_GUIDE.md`.

