# Deployment Guide for VoiceLink Landing Page

This guide covers how to deploy your VoiceLink landing page to various platforms.

## Prerequisites

- Node.js 18+ installed
- Yarn package manager installed
- Git repository configured

## Local Development

To run the app locally:

```bash
yarn install
yarn dev
```

The app will open at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
yarn build
```

This generates an optimized build in the `dist/` folder.

To preview the production build locally:

```bash
yarn preview
```

## Deployment Options

### 1. Vercel (Recommended)

Vercel is optimized for Vite and provides the best experience with automatic deployments.

**Steps:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

The project includes a `vercel.json` configuration file for optimal settings.

### 2. Netlify

**Steps:**

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure build settings:
   - Build command: `yarn build`
   - Publish directory: `dist`
6. Click "Deploy"

### 3. GitHub Pages

**Steps:**

1. Add to `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

2. Deploy using GitHub Actions or manual build:
   ```bash
   yarn build
   # Push dist/ to gh-pages branch
   ```

### 4. Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=0 /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build and run:
```bash
docker build -t voicelink-landing .
docker run -p 3000:3000 voicelink-landing
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Available variables:
- `VITE_API_URL` - Backend API endpoint
- `VITE_ANALYTICS_ID` - Analytics tracking ID
- `VITE_ENABLE_BETA_FEATURES` - Feature flag

## Performance Optimization

The app is pre-configured with:

- ✅ Code splitting with vendor bundle separation
- ✅ Minification with Terser
- ✅ Tree-shaking of unused code
- ✅ CSS preprocessing with Tailwind
- ✅ Image optimization ready (use `<img>` with proper formats)

## CI/CD Integration

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

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
          node-version: 18
      - run: yarn install
      - run: yarn build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
```

## Monitoring & Analytics

- Add your tracking ID to `.env`
- Monitor performance using Web Vitals
- Use browser DevTools Lighthouse for optimization

## Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Port already in use
```bash
# Change dev port in vite.config.js
server: {
  port: 3001,
}
```

### CSS not loading
- Ensure `index.css` is imported in `main.jsx`
- Check that Tailwind config includes all template paths
- Clear browser cache

## Support

For issues, check:
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
