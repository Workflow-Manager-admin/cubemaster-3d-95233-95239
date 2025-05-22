import React from 'react';

// PUBLIC_INTERFACE
/**
 * Controls - Component providing UI controls for Rubik's cube operations.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onRotateFace - Function to handle face rotation
 * @param {Function} props.onReset - Function to reset the cube
 * @param {Function} props.onScramble - Function to scramble the cube
 */
const Controls = ({ onRotateFace, onReset, onScramble }) => {
  return (
    <div className="cube-controls">
      <div className="control-section">
        <h3>Face Controls</h3>
        <div className="face-controls">
          <div className="control-row">
            <button 
              className="face-button" 
              onClick={() => onRotateFace('front', true)}
              title="Rotate Front Face Clockwise"
            >
              F
            </button>
            <button 
              className="face-button" 
              onClick={() => onRotateFace('front', false)}
              title="Rotate Front Face Counter-Clockwise"
            >
              F'
            </button>
          </div>
          
          <div className="control-row">
            <button 
              className="face-button" 
              onClick={() => onRotateFace('back', true)}
              title="Rotate Back Face Clockwise"
            >
              B
            </button>
            <button 
              className="face-button" 
              onClick={() => onRotateFace('back', false)}
              title="Rotate Back Face Counter-Clockwise"
            >
              B'
            </button>
          </div>
          
          <div className="control-row">
            <button 
              className="face-button" 
              onClick={() => onRotateFace('up', true)}
              title="Rotate Up Face Clockwise"
            >
              U
            </button>
            <button 
              className="face-button" 
              onClick={() => onRotateFace('up', false)}
              title="Rotate Up Face Counter-Clockwise"
            >
              U'
            </button>
          </div>
          
          <div className="control-row">
            <button 
              className="face-button" 
              onClick={() => onRotateFace('down', true)}
              title="Rotate Down Face Clockwise"
            >
              D
            </button>
            <button 
              className="face-button" 
              onClick={() => onRotateFace('down', false)}
              title="Rotate Down Face Counter-Clockwise"
            >
              D'
            </button>
          </div>
          
          <div className="control-row">
            <button 
              className="face-button" 
              onClick={() => onRotateFace('left', true)}
              title="Rotate Left Face Clockwise"
            >
              L
            </button>
            <button 
              className="face-button" 
              onClick={() => onRotateFace('left', false)}
              title="Rotate Left Face Counter-Clockwise"
            >
              L'
            </button>
          </div>
          
          <div className="control-row">
            <button 
              className="face-button" 
              onClick={() => onRotateFace('right', true)}
              title="Rotate Right Face Clockwise"
            >
              R
            </button>
            <button 
              className="face-button" 
              onClick={() => onRotateFace('right', false)}
              title="Rotate Right Face Counter-Clockwise"
            >
              R'
            </button>
          </div>
        </div>
      </div>
      
      <div className="control-section">
        <h3>Cube Operations</h3>
        <div className="operation-controls">
          <button 
            className="btn" 
            onClick={() => onScramble(20)}
            title="Randomly scramble the cube"
          >
            Scramble
          </button>
          <button 
            className="btn" 
            onClick={onReset}
            title="Reset cube to solved state"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
