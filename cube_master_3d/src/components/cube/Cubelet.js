import React from 'react';
import { BoxGeometry } from 'three';
import { useFrame } from '@react-three/fiber';

// Define the standard Rubik's cube colors
const CUBE_COLORS = {
  white: '#FFFFFF',
  yellow: '#FFFF00',
  red: '#FF0000',
  orange: '#FF8800',
  blue: '#0000FF',
  green: '#00FF00',
  black: '#111111' // For invisible faces
};

// PUBLIC_INTERFACE
/**
 * Cubelet - Component for rendering a single cube piece of the Rubik's cube.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.position - [x, y, z] position coordinates
 * @param {Object} props.colors - Object containing color values for each face
 */
const Cubelet = ({ position, colors }) => {
  const meshRef = useRef();
  const scale = 0.95; // Slightly smaller than 1 to create gaps between cubelets
  
  // Apply any animations or transitions here
  useFrame(() => {
    if (meshRef.current && meshRef.current.userData.targetRotation) {
      // Implement smooth transitions for cube rotations
      const target = meshRef.current.userData.targetRotation;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        target.x,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        target.y,
        0.1
      );
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        target.z,
        0.1
      );
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} scale={[scale, scale, scale]}>
        <boxGeometry args={[1, 1, 1]} />
        {/* Right face (+x) */}
        <meshStandardMaterial attach="material-0" color={CUBE_COLORS[colors.right || 'black']} />
        {/* Left face (-x) */}
        <meshStandardMaterial attach="material-1" color={CUBE_COLORS[colors.left || 'black']} />
        {/* Top face (+y) */}
        <meshStandardMaterial attach="material-2" color={CUBE_COLORS[colors.up || 'black']} />
        {/* Bottom face (-y) */}
        <meshStandardMaterial attach="material-3" color={CUBE_COLORS[colors.down || 'black']} />
        {/* Front face (+z) */}
        <meshStandardMaterial attach="material-4" color={CUBE_COLORS[colors.front || 'black']} />
        {/* Back face (-z) */}
        <meshStandardMaterial attach="material-5" color={CUBE_COLORS[colors.back || 'black']} />
      </mesh>
    </group>
  );
};

export default Cubelet;
