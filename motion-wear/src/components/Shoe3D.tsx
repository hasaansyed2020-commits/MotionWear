'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Shoe Model Component
function NikeShoeModel({ autoRotate = true }: { autoRotate?: boolean }) {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);
  
  // Try to load Nike GLB model, fallback to stylized shoe
  let scene: THREE.Object3D | THREE.Group;
  try {
    const gltf = useGLTF('/models/sneaker.glb', true);
    scene = gltf.scene;
  } catch {
    // Fallback: Create enhanced stylized Nike-like shoe
    scene = new THREE.Group();
    
    // Main shoe body - more curved
    const shoeGeometry = new THREE.BoxGeometry(2.2, 1.2, 3.5);
    const shoeMaterial = new THREE.MeshStandardMaterial({ 
      color: '#ffffff',
      roughness: 0.3,
      metalness: 0.2,
    });
    const shoeMesh = new THREE.Mesh(shoeGeometry, shoeMaterial);
    shoeMesh.castShadow = true;
    scene.add(shoeMesh);
    
    // Sole - white/grey
    const soleGeometry = new THREE.BoxGeometry(2.4, 0.4, 3.7);
    const soleMaterial = new THREE.MeshStandardMaterial({ 
      color: '#f0f0f0',
      roughness: 0.6,
    });
    const soleMesh = new THREE.Mesh(soleGeometry, soleMaterial);
    soleMesh.position.y = -0.8;
    soleMesh.castShadow = true;
    scene.add(soleMesh);
    
    // Nike Swoosh accent - purple gradient
    const swooshGeometry = new THREE.BoxGeometry(2.3, 0.3, 0.4);
    const swooshMaterial = new THREE.MeshStandardMaterial({ 
      color: '#764ba2',
      metalness: 0.5,
      roughness: 0.3,
    });
    const swooshMesh = new THREE.Mesh(swooshGeometry, swooshMaterial);
    swooshMesh.position.set(0, 0.1, 0.5);
    swooshMesh.rotation.z = -0.1;
    scene.add(swooshMesh);
    
    // Heel accent - purple
    const heelGeometry = new THREE.BoxGeometry(2.2, 1.0, 0.6);
    const heelMaterial = new THREE.MeshStandardMaterial({ 
      color: '#667eea',
      roughness: 0.4,
    });
    const heelMesh = new THREE.Mesh(heelGeometry, heelMaterial);
    heelMesh.position.set(0, 0, -1.5);
    scene.add(heelMesh);
  }
  
  // Auto-rotate + Floating animation
  useFrame((state) => {
    if (meshRef.current) {
      if (autoRotate) {
        meshRef.current.rotation.y += 0.008; // Smooth auto-rotation
      }
      // Floating effect
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Scale on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={2.5}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI / 4, 0]} // Initial angle
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

// Loading Spinner
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl">👟</span>
          </div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Loading Nike Model...</p>
      </div>
    </div>
  );
}

// Main Component
interface Shoe3DProps {
  autoRotate?: boolean;
  enableZoom?: boolean;
  showControls?: boolean;
}

export default function Shoe3D({ 
  autoRotate = true, 
  enableZoom = true,
  showControls = true 
}: Shoe3DProps) {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative rounded-2xl overflow-hidden">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          preserveDrawingBuffer: true 
        }}
        style={{ background: 'transparent' }}
      >
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[3, 1, 5]} fov={45} />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, 5, -10]} intensity={0.5} />
        <pointLight position={[0, -5, 5]} intensity={0.3} color="#764ba2" />

        {/* 3D Model */}
        <Suspense fallback={null}>
          <NikeShoeModel autoRotate={autoRotate} />
          
          {/* Ground Shadow */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.5}
            scale={10}
            blur={2.5}
            far={4}
            color="#764ba2"
          />
          
          {/* Environment Lighting */}
          <Environment 
            preset="studio" 
            background={false}
          />
        </Suspense>

        {/* Interactive Controls */}
        <OrbitControls
          enableZoom={enableZoom}
          enablePan={false}
          minDistance={2}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          autoRotate={false} // We handle rotation manually
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>

      {/* UI Overlays */}
      {showControls && (
        <>
          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-purple-100"
          >
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-lg">🖱️</span>
              <span className="font-medium text-gray-700">
                Drag to rotate • Scroll to zoom
              </span>
            </div>
          </motion.div>

          {/* Brand Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-purple-100">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                Nike Training
              </span>
            </div>
          </div>

          {/* 360° Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-purple-900 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
            360° VIEW
          </div>
        </>
      )}

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-white to-purple-100 opacity-50"></div>
    </div>
  );
}

// Preload the GLB model
try {
  useGLTF.preload('/models/sneaker.glb');
} catch {
  // Model not available, will use fallback
}
