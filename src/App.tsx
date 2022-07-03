import { Canvas } from "@react-three/fiber";

export function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"#ff0000"} />
      </mesh>
    </Canvas>
  );
}
