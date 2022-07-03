import { GroupProps } from "@react-three/fiber";
import { BackSide } from "three";

export function Chikuwa(props: GroupProps) {
  return (
    <group {...props}>
      <mesh position={[0, 2.5, 0]}>
        <cylinderGeometry args={[1, 1, 1, 64, 1, true, 0, Math.PI * 2]} />
        <meshStandardMaterial color={"bisque"} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[1, 1, 4.001, 64, 64, true, 0, Math.PI * 2]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[1, 1, 4, 64, 64, true, 0, Math.PI * 2]} />
        <meshStandardMaterial color={"darkorange"} />
      </mesh>
      <mesh position={[0, -2.5, 0]}>
        <cylinderGeometry args={[1, 1, 1, 64, 1, true, 0, Math.PI * 2]} />
        <meshStandardMaterial color={"bisque"} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.6, 0.6, 6, 32, 1, true, 0, Math.PI * 2]} />
        <meshStandardMaterial color={"bisque"} side={BackSide} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.6, 0.6, 6, 32, 1, true, 0, Math.PI * 2]} />
        <meshStandardMaterial color={"bisque"} side={BackSide} />
      </mesh>
      <mesh position={[0, 3, 0]} rotation={[Math.PI * 1.5, 0, 0]}>
        <ringGeometry args={[0.59, 1, 64, 1, 0, Math.PI * 2]} />
        <meshStandardMaterial color={"bisque"} />
      </mesh>
      <mesh position={[0, -3, 0]} rotation={[Math.PI * 0.5, 0, 0]}>
        <ringGeometry args={[0.59, 1, 64, 1, 0, Math.PI * 2]} />
        <meshStandardMaterial color={"bisque"} />
      </mesh>
    </group>
  );
}
