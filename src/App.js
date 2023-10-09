import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import "./style.css";
import {OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Box() {
  return (
    <>
    <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45} />
    <PerspectiveCamera makeDefault position={[0,0.35,1]} />
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
    </>
  );
}


function App() {
  return (
    <Canvas>
      <Suspense fallback={<div>Loading...</div>}>
        <Box />
      </Suspense>
    </Canvas>
  );
}
export default App;