# Deploy to GitHub Pages - Step by Step

## Prerequisites
- GitHub account (free at github.com)
- Your website files (already ready!)

## Quick Deployment Steps

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit - CN ONE profile website"
```

### 2. Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `cn-one-profile`
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### 3. Connect and Push
```bash
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/cn-one-profile.git
git push -u origin main
```
Replace `YOURUSERNAME` with your actual GitHub username.

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Source: "Deploy from a branch"
5. Branch: "main" 
6. Folder: "/ (root)"
7. Click "Save"

### 5. Access Your Website
- Wait 2-5 minutes for deployment
- Your site will be live at: `https://YOURUSERNAME.github.io/cn-one-profile`

## Alternative: Use demo.html as main page
If you want the demo version (with animated background) as your main page:
```bash
# Rename demo.html to index.html
mv demo.html index.html
# Or copy it
cp demo.html index.html
```

## Updating Your Website
After making changes:
```bash
git add .
git commit -m "Updated website"
git push
```
Changes will be live in 2-5 minutes!