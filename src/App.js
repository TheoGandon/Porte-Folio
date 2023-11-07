import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import Menu from './components/test'
import './App.css'

const Box = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[12, 14, 2]} />
      <meshLambertMaterial attach='material' color='red' />
      <Html rotateX={-Math.PI / 2} position={[0.1,0.5,1.01]} transform occlude>
              <div onPointerDown={(e) => e.stopPropagation()} className='wrapper'>
                <Menu />
              </div>
      </Html> 
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', background: 'black' }}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.7} />
      <spotLight position={[2, 1.5, 2]} angle={0.9} />
      <Box />
    </Canvas>
  );
};

export default App;
