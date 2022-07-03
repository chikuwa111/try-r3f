import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Chikuwa } from "./Chikuwa";

export function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight args={["white", 0.5]} />
      <directionalLight args={["brown", 2]} position={[-1, -1, -1]} />
      <directionalLight args={["brown", 2]} position={[1, 1, 1]} />
      <Chikuwa />
    </Canvas>
  );
}
