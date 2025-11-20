'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// 3D Shoe Model Component
function ShoeModel() {
  const meshRef = useRef<THREE.Group>(null)
  
  // Try to load 3D model, fallback to a box if not available
  let scene: THREE.Object3D | THREE.Group
  try {
    const gltf = useGLTF('/models/shoe.glb', true)
    scene = gltf.scene
  } catch {
    // Fallback: Create a stylized shoe-like shape using basic geometry
    scene = new THREE.Group()
    
    // Main shoe body
    const shoeGeometry = new THREE.BoxGeometry(2, 1, 3)
    const shoeMaterial = new THREE.MeshStandardMaterial({ 
      color: '#667eea',
      roughness: 0.4,
      metalness: 0.6,
    })
    const shoeMesh = new THREE.Mesh(shoeGeometry, shoeMaterial)
    scene.add(shoeMesh)
    
    // Sole
    const soleGeometry = new THREE.BoxGeometry(2.2, 0.3, 3.2)
    const soleMaterial = new THREE.MeshStandardMaterial({ 
      color: '#ffffff',
      roughness: 0.8,
    })
    const soleMesh = new THREE.Mesh(soleGeometry, soleMaterial)
    soleMesh.position.y = -0.65
    scene.add(soleMesh)
    
    // Accent stripe
    const stripeGeometry = new THREE.BoxGeometry(2.1, 0.2, 0.3)
    const stripeMaterial = new THREE.MeshStandardMaterial({ 
      color: '#764ba2',
    })
    const stripeMesh = new THREE.Mesh(stripeGeometry, stripeMaterial)
    stripeMesh.position.set(0, 0.2, 0)
    scene.add(stripeMesh)
  }
  
  // Subtle bobbing animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={2}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  )
}

// Loading Fallback
function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-primary-500 
                    rounded-full animate-spin" />
      <p className="mt-4 text-gray-600 font-medium">Loading 3D Model...</p>
    </div>
  )
}

export default function Shoe3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 10, 7]} 
          intensity={0.8} 
          castShadow 
        />
        <spotLight 
          position={[-5, 5, 5]} 
          intensity={0.5} 
          color="#667eea"
          angle={0.3}
          penumbra={1}
        />

        {/* 3D Model with Suspense for loading */}
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <ShoeModel />
          </Stage>
        </Suspense>

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Loading State - Outside Canvas */}
      <Suspense fallback={<LoadingFallback />}>
        {/* Content loaded */}
      </Suspense>
    </div>
  )
}

// Preload the model (will gracefully fail if file doesn't exist)
try {
  useGLTF.preload('/models/shoe.glb')
} catch {
  // Model not available, will use fallback
}
