import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { useControls } from "leva";

const Model = () => {
  const torus = useRef(null);
  const { nodes } = useGLTF("/assets/torus-smooth.glb");
  const { viewport } = useThree();

  useFrame(() => {
    torus.current.rotation.x += 0.01;
  });

  const materialProps = useControls({
    thickness: { value: 0.45, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.11, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 12}>
      <Text
        fontSize={1.5}
        font="/font/Poppins-Medium.ttf"
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, -1]}
      >
        Nizar Almas
      </Text>
      <mesh ref={torus} {...nodes.Torus}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
