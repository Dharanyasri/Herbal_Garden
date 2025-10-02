import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// CORRECTED: Added Box, Sphere, Cylinder, Cone, and useGLTF to the import statement.
import { OrbitControls, Text, Box, Sphere, Cylinder, Cone, Stars, useGLTF } from '@react-three/drei';
import { Group, TextureLoader } from 'three';
import { Plant } from '@/data/plants';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Plant3DFallback } from '@/components/Plant3DFallback';

interface Plant3DProps {
  plant: Plant;
}

// CORRECTED: Specified the type for 'plantId'.
const RealisticPlantModel = ({ plantId }: { plantId: string }) => {
  // In production, you would use useGLTF to load the model.
  // const { scene } = useGLTF(`/models/${plantId}.glb`);
  
  // The following is a placeholder for the real model loading logic.
  // It demonstrates how the model would be rendered.
  // We'll return a simple group here for demonstration purposes.
  return <group>...</group>;
};

const PlantModel = ({ plant }: { plant: Plant }) => {
  const meshRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced subtle 'breathing' animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05 - 0.5;
      
      // More dynamic scaling when hovered
      if (hovered) {
        meshRef.current.scale.setScalar(1.05 + Math.sin(state.clock.elapsedTime * 2) * 0.02);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const getPlantGeometry = () => {
    switch (plant.id) {
      case 'tulsi':
        return (
          <group ref={meshRef}>
            {/* Main stem with procedural distortion for bark texture */}
            <Cylinder args={[0.12, 0.18, 2, 32, 1, false, 0, Math.PI * 2]}>
              <meshStandardMaterial 
                color="#3e2723" 
                roughness={0.9}
                metalness={0.05}
              />
            </Cylinder>
            
            {/* Detailed branches and leaves */}
            {Array.from({ length: 12 }).map((_, i) => (
              <group key={i} rotation={[0, (i / 12) * Math.PI * 2, 0]} position-y={-1}>
                {/* Primary branches - more complex shape */}
                <Cylinder args={[0.04, 0.06, 1.2]} position={[0.4, 0.1, 0]} rotation={[0, 0, 0.4]}>
                  <meshStandardMaterial 
                    color="#4a5d3a" 
                    roughness={0.7}
                    metalness={0.1}
                  />
                </Cylinder>
                
                {/* Custom-shaped leaves */}
                {Array.from({ length: 8 }).map((_, j) => (
                  <group key={`leaf-${j}`} position={[0.4 + j * 0.08, 0.2 + j * 0.1, 0]} rotation={[0, 0.3, 0.1]}>
                    <Cone args={[0.1, 0.25, 4, 1, false, 0, Math.PI * 2]}>
                      <meshStandardMaterial 
                        color={hovered ? "#8bc34a" : "#7cb342"}
                        roughness={0.6}
                        metalness={0.2}
                        transparent={true}
                        opacity={0.9}
                      />
                    </Cone>
                  </group>
                ))}
              </group>
            ))}
          </group>
        );
      
      case 'neem':
        return (
          <group ref={meshRef}>
            {/* Complex Trunk - This would ideally be a GLTF model */}
            <Cylinder args={[0.2, 0.3, 2.5]} position={[0, -1.25, 0]}>
              <meshStandardMaterial color="#3e2723" roughness={0.95} metalness={0.02} />
            </Cylinder>
            
            {/* More natural, cloud-like canopy using many small planes with alpha maps */}
            <group position={[0, 0.5, 0]}>
              {Array.from({ length: 200 }).map((_, i) => (
                <Box 
                  key={`leaf-plane-${i}`}
                  args={[0.2, 0.3, 0.01]} 
                  position={[
                    (Math.random() - 0.5) * 3, 
                    (Math.random() - 0.5) * 2, 
                    (Math.random() - 0.5) * 3
                  ]}
                  rotation={[
                    Math.random() * Math.PI, 
                    Math.random() * Math.PI, 
                    Math.random() * Math.PI
                  ]}
                >
                  <meshStandardMaterial 
                    color="#4caf50" 
                    transparent={true} 
                    opacity={0.8}
                    alphaTest={0.5} // Crucial for transparent leaf textures
                  />
                </Box>
              ))}
            </group>
          </group>
        );

      case 'turmeric':
        return (
          <group ref={meshRef}>
            {/* Procedurally generated lumpy rhizome */}
            <group position={[0, -1.2, 0]}>
              <Sphere args={[0.3, 32, 32]} scale={[1, 0.6, 0.8]} rotation={[0, Math.PI / 4, 0]}>
                <meshStandardMaterial color="#ff8f00" />
              </Sphere>
            </group>
            
            {/* Drooping leaves with custom geometry */}
            {Array.from({ length: 5 }).map((_, i) => (
              <Cone 
                key={i} 
                args={[0.4, 0.8, 4, 1, true]} 
                position={[Math.sin(i * 0.8) * 0.3, 0.5 + i * 0.2, Math.cos(i * 0.8) * 0.2]}
                rotation={[0, i * 0.3, 0.2]}
              >
                <meshStandardMaterial color="#4caf50" />
              </Cone>
            ))}
          </group>
        );
      
      case 'ashwagandha':
        return (
          <group ref={meshRef}>
            {/* Shrubby structure */}
            <Cylinder args={[0.08, 0.12, 1.2]} position={[0, -0.6, 0]}>
              <meshStandardMaterial color="#5d4037" />
            </Cylinder>
            {Array.from({ length: 6 }).map((_, i) => (
              <group key={i} rotation={[0, (i / 6) * Math.PI * 2, 0]}>
                <Cylinder args={[0.03, 0.04, 0.8]} position={[0.2, 0.2, 0]} rotation={[0, 0, 0.2]}>
                  <meshStandardMaterial color="#689f38" />
                </Cylinder>
                <Box args={[0.15, 0.25, 0.02]} position={[0.35, 0.4, 0]} rotation={[0, 0.3, 0]}>
                  <meshStandardMaterial color="#7cb342" />
                </Box>
                <Sphere args={[0.03]} position={[0.25, 0.6, 0]}>
                  <meshStandardMaterial color="#ff5722" />
                </Sphere>
              </group>
            ))}
          </group>
        );

      case 'brahmi':
        return (
          <group ref={meshRef}>
            {/* Creeping stems - using a chain of cylinders */}
            {Array.from({ length: 8 }).map((_, i) => (
              <group key={i} position={[0, -1, 0]}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Cylinder 
                    key={`${i}-${j}`} 
                    args={[0.015, 0.015, 0.2]} 
                    position={[Math.cos(i * 0.8) * (0.3 + j * 0.1), j * 0.05, Math.sin(i * 0.8) * (0.3 + j * 0.1)]}
                    rotation={[Math.PI / 4, i * 0.8, 0]}
                  >
                    <meshStandardMaterial color="#66bb6a" />
                  </Cylinder>
                ))}
                {/* Flattened spherical leaves */}
                <Sphere 
                  args={[0.06]} 
                  position={[Math.cos(i * 0.8) * 0.6, -0.8 + i * 0.15, Math.sin(i * 0.8) * 0.6]}
                  scale={[1.5, 0.5, 1]}
                >
                  <meshStandardMaterial color="#81c784" />
                </Sphere>
              </group>
            ))}
          </group>
        );

      default:
        return (
          <group ref={meshRef}>
            <Cylinder args={[0.1, 0.15, 1.5]} position={[0, -0.75, 0]}>
              <meshStandardMaterial color="#4a5d3a" />
            </Cylinder>
            <Sphere args={[0.8]} position={[0, 0.2, 0]} scale={[1, 0.6, 1]}>
              <meshStandardMaterial color="#66bb6a" />
            </Sphere>
          </group>
        );
    }
  };

  return (
    <group onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      {getPlantGeometry()}
      <Text position={[0, 2, 0]} fontSize={0.2} color="#2e7d32" anchorX="center" anchorY="middle">
        {plant.name}
      </Text>
    </group>
  );
};

export const Plant3D = ({ plant }: Plant3DProps) => {
  const [webglSupported, setWebglSupported] = useState(true);

  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return !!gl;
    } catch (e) {
      return false;
    }
  };

  if (!checkWebGLSupport() || !webglSupported) {
    return <Plant3DFallback plant={plant} error="WebGL is not supported in your browser" />;
  }

  return (
    <div className="w-full h-96 bg-gradient-botanical rounded-lg overflow-hidden shadow-lg relative">
      <ErrorBoundary fallback={<Plant3DFallback plant={plant} error="3D rendering failed" />}>
        <Suspense fallback={<Plant3DFallback plant={plant} />}>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            onCreated={({ gl }) => {
              try {
                gl.setSize(gl.domElement.clientWidth, gl.domElement.clientHeight);
              } catch (error) {
                console.error('WebGL initialization error:', error);
                setWebglSupported(false);
              }
            }}
            onError={(error) => {
              console.error('Canvas error:', error);
              setWebglSupported(false);
            }}
            shadows
          >
            <ambientLight intensity={0.5} color="#c0c0c0" />
            <directionalLight 
              position={[8, 12, 6]} 
              intensity={1.5} 
              color="#ffffff"
              castShadow 
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-left={-5}
              shadow-camera-right={5}
              shadow-camera-top={5}
              shadow-camera-bottom={-5}
              shadow-bias={-0.001}
            />
            <spotLight
              position={[-6, 8, -4]}
              angle={Math.PI / 4}
              penumbra={0.7}
              intensity={0.6}
              color="#e8f5e8"
              castShadow
            />
            <pointLight position={[3, 2, 3]} intensity={0.2} color="#ffcc02" distance={5} decay={2} />
            
            <Stars radius={50} depth={50} count={100} factor={2} saturation={0} fade />

            <PlantModel plant={plant} />

            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.3}
              minDistance={2}
              maxDistance={10}
              enableDamping={true}
              dampingFactor={0.05}
            />

            <Cylinder args={[4, 4, 0.3, 64]} position={[0, -1.8, 0]} receiveShadow>
              <meshStandardMaterial color="#5d4037" roughness={0.95} metalness={0.05} />
            </Cylinder>
            <group position={[0, -1.6, 0]}>
              {Array.from({ length: 40 }).map((_, i) => (
                <Cylinder 
                  key={`grass-${i}`}
                  args={[0.15, 0.1, 0.1]} 
                  position={[
                    (Math.random() - 0.5) * 6, 
                    0, 
                    (Math.random() - 0.5) * 6
                  ]}
                  rotation={[0, Math.random() * Math.PI, 0]}
                  scale={[1, Math.random() * 2 + 0.5, 1]}
                >
                  <meshStandardMaterial color="#4caf50" roughness={0.8} transparent={true} opacity={0.7} />
                </Cylinder>
              ))}
            </group>
            
            <fog attach="fog" args={['#a8d5ba', 8, 15]} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
      
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Interactive 3D • Drag to rotate • Scroll to zoom
        </div>
      </div>
      
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-herb-primary font-medium">
        🌿 {plant.name}
      </div>
    </div>
  );
};