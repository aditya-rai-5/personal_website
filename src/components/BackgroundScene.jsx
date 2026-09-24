import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D Branching Erdtree using InstancedMesh
function TrueErdtree() {
  const meshRef = useRef();

  const { matrices, count, geometry } = useMemo(() => {
    const matrices = [];
    const root = new THREE.Object3D();
    root.scale.set(3, 3, 3); // Make the entire tree 3x bigger
    
    // Thinner, longer branches for a weeping willow / Erdtree look
    const geo = new THREE.CylinderGeometry(0.2, 0.9, 10, 6);
    geo.translate(0, 5, 0);
    
    const maxDepth = 7; // Extremely dense tree (~4000-5000 branches)

    const createBranch = (parent, depth) => {
      if (depth > maxDepth) return;
      
      parent.updateMatrixWorld(true);
      matrices.push(parent.matrixWorld.clone());
      
      // Base trunk splits into 6, main branches into 3, twigs into 2
      const numChildren = depth === 0 ? 6 : (depth < 4 ? 3 : 2);
      
      for(let i=0; i<numChildren; i++) {
        const child = new THREE.Object3D();
        child.position.y = 9.5; 
        
        const angleY = (Math.PI * 2 / numChildren) * i + (Math.random() - 0.5);
        let angleX = 0.2 + Math.random() * 0.3; 
        if (depth > 4) angleX += 0.3; // Outer branches droop heavily
        
        child.rotation.set(angleX, angleY, 0, 'YXZ');
        
        // Branches get thinner/shorter as they grow
        const scaleFactor = 0.78 + Math.random() * 0.08;
        child.scale.set(scaleFactor, scaleFactor, scaleFactor);
        
        parent.add(child);
        createBranch(child, depth + 1);
      }
    };
    
    createBranch(root, 0);
    return { matrices, count: matrices.length, geometry: geo };
  }, []);

  useEffect(() => {
    if (meshRef.current) {
      matrices.forEach((mat, i) => {
        meshRef.current.setMatrixAt(i, mat);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [matrices]);

  return (
    <group position={[0, -25, -80]}>
      <instancedMesh ref={meshRef} args={[geometry, null, count]} frustumCulled={false}>
        <meshBasicMaterial color="#eccd80" transparent opacity={0.65} blending={THREE.AdditiveBlending} fog={false} />
      </instancedMesh>
      
      {/* Massive Ethereal Canopy / Aura surrounding the tree */}
      <mesh position={[0, 70, -10]}>
        <sphereGeometry args={[70, 32, 32]} />
        <meshBasicMaterial color="#caa14b" transparent opacity={0.15} blending={THREE.AdditiveBlending} fog={false} />
      </mesh>
      <mesh position={[0, 60, -5]}>
        <sphereGeometry args={[50, 32, 32]} />
        <meshBasicMaterial color="#eccd80" transparent opacity={0.2} blending={THREE.AdditiveBlending} fog={false} />
      </mesh>

      {/* Falling Leaves / Golden Particles around the tree */}
      <Sparkles 
        count={3500} 
        scale={130} 
        size={40} 
        speed={0.15} 
        opacity={0.8} 
        color="#eccd80" 
        position={[0, 60, 0]} 
      />
    </group>
  );
}

// Procedural Mountain Valley
function MountainValley() {
  const geometryRef = useRef();

  useEffect(() => {
    if (geometryRef.current) {
      const positions = geometryRef.current.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        
        const noise = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 6 + Math.sin(x * 0.02) * Math.cos(y * 0.03) * 20;
        const valleyFactor = Math.min(1, Math.abs(x) / 40);
        
        positions[i + 2] = noise * valleyFactor - 2; 
      }
      geometryRef.current.computeVertexNormals();
      geometryRef.current.attributes.position.needsUpdate = true;
    }
  }, []);

  return (
    <group position={[0, -12, -25]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry ref={geometryRef} args={[300, 200, 64, 64]} />
        <meshStandardMaterial color="#080604" roughness={1} metalness={0.1} />
      </mesh>
    </group>
  );
}

// Embers floating across the screen (foreground)
function Embers() {
  return (
    <Sparkles
      count={400}
      scale={60}
      size={8}
      speed={0.6}
      opacity={0.6}
      color="#9c3a2b"
      position={[0, 0, -10]}
    />
  );
}

// Floating Swords
function FloatingSwords() {
  const swords = useMemo(() => {
    return Array.from({ length: 12 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 30 + 5,
        (Math.random() - 0.5) * 30 - 15
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      scale: 0.6 + Math.random() * 0.8
    }));
  }, []);

  return (
    <group>
      {swords.map((props, i) => (
        <Float key={i} speed={1.2} rotationIntensity={2} floatIntensity={3}>
          <mesh position={props.position} rotation={props.rotation} scale={props.scale}>
            {/* Blade */}
            <boxGeometry args={[0.2, 8, 0.02]} />
            <meshStandardMaterial color="#ece1c8" metalness={0.9} roughness={0.1} transparent opacity={0.3} />
            
            {/* Crossguard */}
            <mesh position={[0, -4.1, 0]}>
               <boxGeometry args={[1.8, 0.2, 0.1]} />
               <meshStandardMaterial color="#caa14b" transparent opacity={0.6} />
            </mesh>
            
            {/* Grip */}
            <mesh position={[0, -5.0, 0]}>
               <cylinderGeometry args={[0.1, 0.1, 1.6]} />
               <meshStandardMaterial color="#151009" />
            </mesh>
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function BackgroundScene() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        // Ethereal dark gradient over the night sky
        background: 'radial-gradient(circle at 50% 50%, rgba(10,10,12,0.6) 0%, rgba(5,5,5,0.95) 70%)'
      }} />
      <Canvas camera={{ position: [0, 2, 20], fov: 60 }} shadows>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 20, 110]} />
        
        {/* Starry night sky in the background */}
        <Stars radius={120} depth={50} count={6000} factor={5} saturation={0} fade speed={1} />
        
        <ambientLight intensity={0.05} />
        
        {/* Main massive light from the Erdtree */}
        <pointLight position={[0, 40, -55]} intensity={2500} distance={200} color="#D4AF37" castShadow />
        {/* Reddish ambient light for contrast */}
        <pointLight position={[-30, 10, 10]} intensity={400} distance={100} color="#9c3a2b" />
        
        <MountainValley />
        <TrueErdtree />
        <Embers />
        <FloatingSwords />
      </Canvas>
    </div>
  );
}
