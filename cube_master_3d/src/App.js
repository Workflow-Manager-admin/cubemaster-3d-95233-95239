import React from 'react';
import './App.css';
import CubeMasterContainer from './components/CubeMasterContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> CubeMaster 3D
            </div>
            <div className="nav-links">
              <a href="#" className="btn">Help</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Interactive 3D Puzzle</div>
            
            <h1 className="title">Rubik's Cube Simulator</h1>
            
            <div className="description">
              Rotate, scramble, and solve the classic 3x3 Rubik's Cube in this interactive simulator.
              Use the controls below or drag directly on the cube to manipulate it.
            </div>
          </div>
          
          <CubeMasterContainer />
        </div>
      </main>
    </div>
  );
}

export default App;