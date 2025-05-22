import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RubiksCube from './cube/RubiksCube';
import Controls from './Controls';
import useCubeState from '../hooks/useCubeState';

// PUBLIC_INTERFACE
/**
 * CubeMasterContainer - Main container component for the CubeMaster 3D application.
 * This component sets up the 3D canvas environment and manages the layout of the
 * Rubik's cube and control elements.
 */
const CubeMasterContainer = () => {
  // Use our custom hook to manage cube state
  const {
    cubeState,
    rotateFace,
    resetCube,
    scrambleCube,
    isSolved,
  } = useCubeState();

  return (
    <div className="cube-master-container">
      <div className="cube-canvas-wrapper">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ background: '#111' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Suspense fallback={null}>
            <RubiksCube cubeState={cubeState} />
          </Suspense>
          <OrbitControls
            enablePan={false}
            minDistance={5}
            maxDistance={15}
          />
        </Canvas>
      </div>
      
      <div className="cube-controls-wrapper">
        <div className="cube-status">
          {isSolved() ? (
            <span className="status-solved">Solved!</span>
          ) : (
            <span className="status-unsolved">Unsolved</span>
          )}
        </div>
        
        <Controls
          onRotateFace={rotateFace}
          onReset={resetCube}
          onScramble={scrambleCube}
        />
      </div>
    </div>
  );
};

export default CubeMasterContainer;
