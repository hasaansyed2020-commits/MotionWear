# Motion Wear

A modern, interactive e-commerce landing page featuring 3D product visualization built with Next.js, Tailwind CSS, and Three.js.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **Tailwind CSS** for responsive, modern styling
- **Three.js** with @react-three/fiber for stunning 3D shoe visualization
- **TypeScript** for type safety
- **Fully responsive** design (mobile-first approach)
- **Interactive 3D model** with auto-rotation and user controls
- **Smooth animations** and transitions
- **Production-ready** deployment configuration

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Language:** TypeScript
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📱 Responsive Design

Tested and optimized for:
- Mobile devices (375px - 414px)
- Tablets (768px - 1024px)
- Desktops (1280px+)
- Large displays (1920px+)

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- Primary colors (purple gradient)
- Secondary colors
- Custom shadows and effects

### 3D Model
Replace `/public/models/shoe.glb` with your own 3D model in GLB format.
The component includes a fallback geometric shape if no model is available.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Author

Created with ❤️ for Motion Wear
