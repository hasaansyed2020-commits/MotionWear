# 🚀 Motion Wear - Deployment Guide

Complete step-by-step guide to deploy Motion Wear to Vercel or Netlify with **PUBLIC ACCESS**.

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [x] All code is committed to Git
- [x] `index.html` is at the root level
- [x] CSS files are in `/css/` folder
- [x] JavaScript files are in `/js/` folder  
- [x] Product data is in `/data/products.json`
- [x] No console errors when testing locally
- [x] All features work (cart, favorites, modal, search, etc.)

---

## 🌐 Option 1: Deploy to Vercel

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate via email or GitHub.

### Step 3: Deploy from Project Directory

```bash
cd /Users/hasaansyed/Documents/MotionWear
vercel --prod
```

When prompted:
- **Setup and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (for first deploy)
- **Project name?** → motion-wear (or custom name)
- **Directory?** → `./` (current directory)
- **Override settings?** → No

### Step 4: Configure PUBLIC Access (CRITICAL)

**After deployment, the site will require authentication by default. Follow these steps to make it public:**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **Motion Wear** project
3. Click **Settings** (top navigation)
4. Scroll to **Deployment Protection** section
5. **DISABLE** the following:
   - ❌ **Vercel Authentication**
   - ❌ **Password Protection**
   - ❌ **Vercel Protection**
6. Click **Save**

### Step 5: Verify Public Access

```bash
# Test in incognito/private window
# Your URL: https://motion-wear-xxx.vercel.app
```

If the site loads without login, you're done! ✅

### Vercel CLI Commands

```bash
# View deployment status
vercel ls

# View project details
vercel inspect [deployment-url]

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-name]
```

---

## 🔷 Option 2: Deploy to Netlify

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

Your browser will open for authentication.

### Step 3: Initialize and Deploy

```bash
cd /Users/hasaansyed/Documents/MotionWear

# Initialize Netlify project
netlify init
```

When prompted:
- **Create & configure new site?** → Yes
- **Team?** → Select your team/account
- **Site name?** → motion-wear (or custom)
- **Build command?** → Leave empty (static site)
- **Directory to deploy?** → `.` (current directory)

### Step 4: Deploy to Production

```bash
netlify deploy --prod
```

Confirm the directory (`.`) when prompted.

### Step 5: Verify Public Access

Netlify sites are **public by default**. No additional configuration needed!

```bash
# Your URL will be shown in terminal:
# https://motion-wear.netlify.app
```

### Netlify CLI Commands

```bash
# Check status
netlify status

# View site info
netlify sites:list

# Open site in browser
netlify open:site

# View deployment logs
netlify watch

# Link to different site
netlify link
```

---

## 🎯 Option 3: Deploy via Git (Recommended)

### Vercel (via GitHub)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. **Import** your GitHub repository
4. Configure:
   - **Framework Preset:** Other
   - **Build Command:** Leave empty
   - **Output Directory:** Leave empty
5. Click **Deploy**
6. After deploy: **Disable Vercel Authentication** (see Step 4 above)

### Netlify (via GitHub)

1. Push code to GitHub (same as above)
2. Go to [app.netlify.com/start](https://app.netlify.com/start)
3. Click **Import from Git** → Select **GitHub**
4. Choose your repository
5. Configure:
   - **Build command:** Leave empty
   - **Publish directory:** `.`
6. Click **Deploy site**
7. Site is **public by default** ✅

---

## 🔧 Troubleshooting

### Issue: "Site requires authentication"

**Solution (Vercel):**
- Go to Project Settings → Deployment Protection
- Disable all protection options
- Redeploy if necessary: `vercel --prod`

### Issue: "404 on page refresh"

**Solution:**
This is a single-page static site, so no special routing needed.
Both `vercel.json` and `netlify.toml` are already configured.

### Issue: "CSS/JS not loading"

**Solution:**
- Verify paths in `index.html`:
  ```html
  <link rel="stylesheet" href="css/styles.css" />
  <script type="module" src="js/main.js"></script>
  ```
- Check browser console for errors
- Ensure files are committed to Git

### Issue: "Products not loading"

**Solution:**
- Check `data/products.json` exists and has valid JSON
- Check browser console: `Failed to load products.json`
- Verify fetch path in `js/products.js`: `./data/products.json`

### Issue: "3D shoe not rendering"

**Solution:**
- This is normal - Three.js requires a 3D model file
- Currently uses CDN fallback
- Add a `.glb` model file to `/assets/models/` if you have one

---

## 📊 Performance Optimization (Post-Deployment)

### 1. Enable Compression

Both Vercel and Netlify handle this automatically.

### 2. Add Real Product Images

Replace placeholder images in `data/products.json`:
```json
"images": [
  "https://your-cdn.com/product-1.jpg",
  "https://your-cdn.com/product-2.jpg"
]
```

### 3. Add 3D Model

1. Get a `.glb` shoe model (free from [Sketchfab](https://sketchfab.com))
2. Place in `/assets/models/shoe.glb`
3. Update `js/main.js` model path

### 4. Configure Caching

Already configured in `vercel.json` and `netlify.toml`:
- CSS/JS: 1 year cache
- Assets: 1 year cache

---

## 🔗 Custom Domain (Optional)

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown
4. Wait for SSL certificate (automatic)

### Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. SSL is automatic

---

## ✅ Post-Deployment Verification

Visit your site and check:

- [ ] Site loads without authentication
- [ ] Hero section with gradient displays correctly
- [ ] Products load and display in grid
- [ ] Filtering works (category, brand, search)
- [ ] Product modal opens on card click
- [ ] Add to cart works
- [ ] Cart drawer opens and displays items
- [ ] Favorites toggle works
- [ ] Size guide modal opens
- [ ] Newsletter form accepts input
- [ ] Bottom navigation visible on mobile
- [ ] All sections responsive on mobile
- [ ] No console errors

---

## 📞 Support

### Vercel Support
- Docs: [vercel.com/docs](https://vercel.com/docs)
- Discord: [vercel.com/discord](https://vercel.com/discord)

### Netlify Support
- Docs: [docs.netlify.com](https://docs.netlify.com)
- Community: [answers.netlify.com](https://answers.netlify.com)

---

## 🎉 You're Live!

Share your site:
- Vercel: `https://motion-wear-xxx.vercel.app`
- Netlify: `https://motion-wear.netlify.app`

**Test in incognito mode to ensure no authentication required!**

---

## 📝 Next Steps

1. Add analytics (Google Analytics, Vercel Analytics)
2. Add real product images and data
3. Configure custom domain
4. Set up environment variables (if needed for future APIs)
5. Enable preview deployments for Git branches

---

**Congratulations! Motion Wear is now live! 🚀**
