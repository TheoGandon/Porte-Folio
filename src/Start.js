import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import './App.css';
import Main from './Main';
import Contact from './Contact';

const Box = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[38, 25, 30]} />
      <meshLambertMaterial attach='material' color='red' />
      <Html rotateX={-Math.PI / 2} position={[6.7, -3.5, 15.1]} transform occlude>
        <div onPointerDown={(e) => e.stopPropagation()}>
          <Contact />
        </div>
      </Html>
    </mesh>
  );
};

const Start = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <OrbitControls />
      <directionalLight position={[10, 10, 20]} intensity={1} />
      <Box />
    </Canvas>
  );
};

export default Start;
