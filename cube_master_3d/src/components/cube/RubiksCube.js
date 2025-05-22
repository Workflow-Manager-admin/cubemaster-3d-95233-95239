import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Cubelet from './Cubelet';

// PUBLIC_INTERFACE
/**
 * RubiksCube - Component for rendering a 3D Rubik's cube.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.cubeState - 3D array representing the current state of the Rubik's cube
 */
const RubiksCube = ({ cubeState }) => {
  const groupRef = useRef();
  
  // Add a subtle rotation animation to the entire cube
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {cubeState.map((layer, x) =>
        layer.map((row, y) =>
          row.map((cubeletData, z) => (
            <Cubelet
              key={`${x}-${y}-${z}`}
              position={[x - 1, y - 1, z - 1]}
              colors={cubeletData.colors}
            />
          ))
        )
      )}
    </group>
  );
};

export default RubiksCube;
