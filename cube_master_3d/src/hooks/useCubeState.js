import { useState, useCallback } from 'react';
import { createInitialCubeState, rotateCubeFace, isCubeSolved } from '../utils/cubeUtils';

// PUBLIC_INTERFACE
/**
 * useCubeState - Custom hook for managing Rubik's cube state and operations.
 * Provides functions to manipulate the cube and check its state.
 * 
 * @returns {Object} - Object containing cube state and manipulation functions
 */
const useCubeState = () => {
  // Initialize the cube in a solved state
  const [cubeState, setCubeState] = useState(() => createInitialCubeState());
  
  /**
   * Rotate a face of the cube
   * @param {string} face - Face to rotate ('front', 'back', 'up', 'down', 'left', 'right')
   * @param {boolean} clockwise - Direction of rotation (true for clockwise, false for counter-clockwise)
   */
  const rotateFace = useCallback((face, clockwise) => {
    setCubeState(prevState => rotateCubeFace(prevState, face, clockwise));
  }, []);
  
  /**
   * Reset the cube to its initial solved state
   */
  const resetCube = useCallback(() => {
    setCubeState(createInitialCubeState());
  }, []);
  
  /**
   * Scramble the cube with random moves
   * @param {number} moves - Number of random moves to perform
   */
  const scrambleCube = useCallback((moves = 20) => {
    setCubeState(prevState => {
      let newState = {...prevState};
      const faces = ['front', 'back', 'up', 'down', 'left', 'right'];
      
      for (let i = 0; i < moves; i++) {
        const randomFace = faces[Math.floor(Math.random() * faces.length)];
        const clockwise = Math.random() > 0.5;
        newState = rotateCubeFace(newState, randomFace, clockwise);
      }
      
      return newState;
    });
  }, []);
  
  /**
   * Check if the cube is currently solved
   * @returns {boolean} - True if the cube is solved
   */
  const isSolved = useCallback(() => {
    return isCubeSolved(cubeState);
  }, [cubeState]);
  
  return {
    cubeState,
    rotateFace,
    resetCube,
    scrambleCube,
    isSolved,
  };
};

export default useCubeState;
