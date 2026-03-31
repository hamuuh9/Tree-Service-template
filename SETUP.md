# Setup Guide

## Step 1: Install Node.js

### For Windows:

1. **Download Node.js:**
   - Go to [https://nodejs.org](https://nodejs.org)
   - Download the LTS version (recommended for most users)
   - Run the installer

2. **Verify installation:**
   Open Command Prompt or PowerShell and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers like `v18.x.x` and `9.x.x`

### Alternative: Using PowerShell (Advanced)

If you have winget (Windows Package Manager):
```powershell
winget install OpenJS.NodeJS.LTS
```

Or using Chocolatey:
```powershell
choco install nodejs-lts
```

## Step 2: Install Project Dependencies

1. **Open terminal in project directory:**
   ```bash
   cd C:\Users\Experttech.pk\Documents\Open Code\BmgTreeService
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Go to [http://localhost:3000](http://localhost:3000)

## Step 3: Create GitHub Repository

### Option A: Using GitHub Website

1. **Go to GitHub:**
   - Visit [https://github.com](https://github.com)
   - Sign in or create account

2. **Create new repository:**
   - Click "+" → "New repository"
   - Repository name: `tree-service-template`
   - Description: `Professional tree service website template with animations`
   - Choose Public or Private
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

3. **Copy repository URL:**
   - It will look like: `https://github.com/your-username/tree-service-template.git`

### Option B: Using GitHub CLI (if installed)

1. **Install GitHub CLI:**
   - Download from [https://cli.github.com](https://cli.github.com)

2. **Login and create repository:**
   ```bash
   gh auth login
   gh repo create tree-service-template --public --description "Professional tree service website template with animations"
   ```

## Step 4: Push Code to GitHub

1. **Add remote repository:**
   ```bash
   git remote add origin https://github.com/your-username/tree-service-template.git
   ```

2. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Step 5: Deploy to Vercel

1. **Go to Vercel:**
   - Visit [https://vercel.com](https://vercel.com)
   - Sign up with GitHub account

2. **Import project:**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live at `https://tree-service-template.vercel.app`

## Troubleshooting

### Node.js not found
- Restart your terminal after installing Node.js
- Check PATH environment variable

### npm install fails
- Try deleting `node_modules` and `package-lock.json`
- Run `npm cache clean --force`
- Run `npm install` again

### Git push fails
- Ensure you're logged into GitHub
- Check repository URL is correct
- Try: `git push --set-upstream origin main`

## Next Steps

1. **Customize template:**
   - Edit `config/templateConfig.ts`
   - Change business details, colors, services

2. **Add your own video:**
   - Replace drone video URL in `components/sections/HeroSection.tsx`
   - Upload your video to a CDN or use a direct URL

3. **Add images:**
   - Add service images to `public/images/`
   - Update image paths in config

4. **Test responsiveness:**
   - Check mobile view
   - Test animations on different devices

## Support

If you encounter issues:
1. Check Node.js version (should be 18+)
2. Ensure all dependencies installed
3. Check browser console for errors
4. Contact support: your-email@example.com