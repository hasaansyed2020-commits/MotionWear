# 🎨 3D Nike Shoe Model - Download Instructions

## 📦 Best Free 3D Model Sources

### 🏆 **Top Recommendation: Sketchfab**
**Link:** https://sketchfab.com/3d-models/nike-glb-5f7c56249bd24d069147bbb16cb3d4b5

**Features:**
- ✅ Format: GLB (perfect for web)
- ✅ Quality: ⭐⭐⭐⭐⭐
- ✅ Free download
- ✅ Ready to use

---

## 🚀 Step-by-Step Download Guide

### Method 1: Sketchfab (Recommended)

1. **Visit Sketchfab:**
   ```
   https://sketchfab.com/search?q=nike+training+shoe&type=models&features=downloadable
   ```

2. **Select a Model:**
   - Choose any Nike shoe model
   - Make sure it has "Download 3D Model" option

3. **Download:**
   - Click "Download 3D Model" button
   - Choose **"glTF Binary (.glb)"** format
   - Free account may be required

4. **Save File:**
   - Rename downloaded file to: `sneaker.glb`
   - Save in this directory: `public/models/sneaker.glb`

---

### Method 2: CGTrader

**Link:** https://www.cgtrader.com/3d-models/nike

1. Filter by "Free" models
2. Download GLB or GLTF format
3. Rename to `sneaker.glb`
4. Place in `public/models/` folder

---

### Method 3: RigModels

**Link:** https://rigmodels.com/?searchkeyword=nike

1. Search for "Nike shoe"
2. Download GLB format
3. Save as `sneaker.glb`

---

## 📁 File Structure

After download, your structure should be:

```
motion-wear/
├── public/
│   ├── models/
│   │   ├── sneaker.glb    ← Place your Nike model here!
│   │   └── README.md       ← This file
│   └── logo.png
├── src/
│   └── components/
│       └── Shoe3D.tsx
```

---

## ✅ Verification

1. File should be named exactly: `sneaker.glb`
2. File should be in: `public/models/sneaker.glb`
3. Restart your dev server after adding the file:
   ```bash
   npm run dev
   ```

---

## 🎯 Alternative: Using Placeholder

If you can't find a model right now, the component will use a **stylized fallback shoe** automatically! The fallback looks like:
- White Nike-style shoe
- Purple swoosh accent
- Purple heel
- Auto-rotating 3D view

---

## 🔥 Recommended Free Models

### **Option 1: Nike Air Max Style**
- Search: "Nike Air Max GLB"
- Size: < 5MB recommended
- Format: .glb

### **Option 2: Generic Sneaker**
- Search: "Running shoe GLB"
- Size: < 5MB recommended
- Format: .glb

### **Option 3: Training Shoe**
- Search: "Training sneaker 3D model"
- Size: < 5MB recommended
- Format: .glb

---

## ⚠️ Important Notes

1. **File Size:** Keep models under 10MB for best performance
2. **Format:** Only .glb files supported (not .obj, .fbx, etc.)
3. **License:** Make sure you have rights to use the model
4. **Optimization:** Smaller files = faster loading

---

## 🎨 Model Optimization (Optional)

If your model is too large, optimize it:

**Online Tools:**
- https://gltf.report/ - GLB optimizer
- https://products.aspose.app/3d/optimizer - Compress 3D files

**Recommended Settings:**
- Max file size: 5MB
- Compress textures
- Remove unused materials

---

## 🚀 After Adding Model

1. **Restart server:**
   ```bash
   npm run dev
   ```

2. **Clear cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Hard refresh browser:**
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + Shift + R`

---

## 💡 Test Your Model

Visit: http://localhost:3000

You should see:
- ✅ 3D Nike shoe rotating
- ✅ Interactive controls (drag to rotate, scroll to zoom)
- ✅ "Nike Training" badge
- ✅ "360° VIEW" badge
- ✅ Floating animation

---

## 🆘 Troubleshooting

**Model not showing?**
1. Check file name is exactly `sneaker.glb`
2. Check file is in `public/models/` folder
3. Restart dev server
4. Clear browser cache
5. Check browser console for errors

**Model too big/small?**
- Adjust `scale={2.5}` in `Shoe3D.tsx`
- Increase = larger, Decrease = smaller

**Model wrong color?**
- The component uses the model's original materials
- Lighting is optimized for white/light-colored shoes

---

## 📞 Need Help?

The fallback shoe will work automatically if no model is found!

Just focus on finding a good Nike GLB model from Sketchfab. 🎨👟
