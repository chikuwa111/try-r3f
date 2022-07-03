import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ComponentProps } from "react";
import { Chikuwa } from "./Chikuwa";
import { RotatingChikuwa } from "./RotatingChikuwa";

const largeScale: [number, number, number] = [0.5, 0.5, 0.5];
const smallScale: [number, number, number] = [0.1, 0.1, 0.1];
const rotatingChikuwaSeeds: Array<
  NonNullable<ComponentProps<typeof RotatingChikuwa>> & { key: string }
> = Array.from({
  length: 100,
}).map(() => ({
  key: crypto.randomUUID(),
  position: [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  ],
  vx: Math.random(),
  vz: Math.random(),
}));

export function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight args={["white", 0.2]} />
      <directionalLight args={["white", 1]} position={[5, 5, 5]} />
      <Chikuwa scale={largeScale} />
      {rotatingChikuwaSeeds.map((props) => (
        <RotatingChikuwa scale={smallScale} {...props} />
      ))}
    </Canvas>
  );
}
