import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../App.css';

function MyRotatingBox() {
    const mesh = React.useRef();
  
    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      mesh.current.rotation.x = a;
    });
}

const Box = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh} >
      <boxGeometry args={[38, 25, 30]} />
      <meshLambertMaterial attach='material' color='red' />
    </mesh>
  );
};

const Start = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw'}}>
      <OrbitControls />
      <MyRotatingBox />
      <directionalLight position={[10, 10, 20]} intensity={1}/>
      <Box />
    </Canvas>
  );
};

export default Start;
