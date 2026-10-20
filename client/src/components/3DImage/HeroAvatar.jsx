import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

import { Model as Avatar } from "./Avatar";

const camera = { position: [0, 4, 4] };

// Loaded with React.lazy, so three.js stays out of the main bundle.
// `active`: render only while the hero is on screen. `interactive`: off on touch screens,
// where orbit controls swallow the swipes people use to scroll the page.
const HeroAvatar = ({ active, interactive }) => (
  <Canvas camera={camera} frameloop={active ? "always" : "never"}>
    <Environment preset="sunset" />
    <Avatar />
    {/* Zoom and pan would hijack the mouse wheel */}
    {interactive && <OrbitControls enableZoom={false} enablePan={false} />}
    <ContactShadows opacity={0.7} />
  </Canvas>
);

export default HeroAvatar;
