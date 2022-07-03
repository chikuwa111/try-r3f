import { useFrame } from "@react-three/fiber";
import { ComponentProps, useRef } from "react";
import { Group } from "three";
import { Chikuwa } from "./Chikuwa";

type Props = ComponentProps<typeof Chikuwa> & {
  vx: number;
  vz: number;
};

export function RotatingChikuwa(props: Props = { vx: 0, vz: 0 }) {
  const ref = useRef<Group | null>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current?.rotation.set(props.vx * t, 0, props.vz * t);
  });

  return <Chikuwa {...props} ref={ref} />;
}
