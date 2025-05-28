# Deployment Guide for Sahayaka Website

This guide covers various deployment options for the Sahayaka healthcare website within the monorepo structure.

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Set the **Root Directory** to `apps/websites/sahayaka.ai`
   - Deploy automatically

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### 2. Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Deploy**
   - Connect GitHub repository
   - Set build settings
   - Deploy automatically

### 3. AWS Amplify

1. **Connect Repository**
   - Open AWS Amplify Console
   - Connect your GitHub repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### 4. Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:22-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production

   FROM node:22-alpine AS builder
   WORKDIR /app
   COPY . .
   COPY --from=deps /app/node_modules ./node_modules
   RUN npm run build

   FROM node:22-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/package.json ./package.json

   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t sahayaka .
   docker run -p 3000:3000 sahayaka
   ```

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production` for production-specific variables:

```bash
NEXT_PUBLIC_SITE_URL=https://sahayaka.ai
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
```

### Security Headers

Add security headers in `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 📊 Performance Optimization

### 1. Image Optimization

- Use Next.js `Image` component for automatic optimization
- Compress images before uploading
- Use WebP format when possible

### 2. Bundle Analysis

```bash
npm install --save-dev @next/bundle-analyzer
```

Add to `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Run analysis:
```bash
ANALYZE=true npm run build
```

### 3. Caching Strategy

- Static assets: 1 year cache
- HTML pages: No cache or short cache
- API routes: Appropriate cache headers

## 🔍 Monitoring and Analytics

### 1. Google Analytics

Add to `_app.tsx`:
```javascript
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
```

### 2. Error Monitoring

Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

## 🚨 Pre-deployment Checklist

- [ ] All environment variables configured
- [ ] Build passes without errors
- [ ] TypeScript type checking passes
- [ ] ESLint passes without errors
- [ ] All pages load correctly
- [ ] Mobile responsiveness tested
- [ ] Performance optimized (Lighthouse score > 90)
- [ ] SEO meta tags configured
- [ ] Analytics tracking implemented
- [ ] Error monitoring setup
- [ ] SSL certificate configured
- [ ] Custom domain configured (if applicable)

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '22'
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📞 Support

For deployment issues:
- Check the deployment platform's documentation
- Review build logs for errors
- Ensure all dependencies are properly installed
- Verify environment variables are set correctly

---

**Ready to transform healthcare with AI!** 🏥✨
