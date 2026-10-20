import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const EARTH_TEXTURE = "https://res.cloudinary.com/ddfq0pl1q/image/upload/v1723399989/Earth_xjhfwu.png";
const camera = { position: [0, 0, 5], fov: 75 };

const Earth = () => {
  const ref = useRef(null);
  const texture = useTexture(EARTH_TEXTURE);
  // Shrink the globe in tall, narrow canvases (phones) so it never overflows its box
  const radius = useThree((state) => 2.7 * Math.min(1, state.size.width / state.size.height));

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.06; // same speed as before: 0.001 rad per frame at 60 fps
  });

  return (
    <mesh ref={ref} scale={radius}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// Loaded with React.lazy once the contact section is near the viewport.
// The canvas fills its parent; `active` pauses rendering while it's off screen.
const Globe = ({ active, interactive }) => (
  <Canvas flat camera={camera} frameloop={active ? "always" : "never"}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 3, 5]} intensity={1} />
    <Earth />
    {interactive && <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.05} />}
  </Canvas>
);

export default Globe;
