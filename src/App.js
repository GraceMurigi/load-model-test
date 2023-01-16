import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Model.jsx';

function App() {
  return (
    <>
      <header>
        <h1 style={{ color: 'black', textAlign: 'center' }}>
          3D MODEL LOADING DEMO
        </h1>
      </header>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: '#111a21',
          width: '100vw',
          height: '90vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
