// Fills its (fixed-size) parent while a 3D scene's code and assets load.
const CanvasPlaceholder = () => (
  <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
    <span className="h-10 w-10 rounded-full border-2 border-white/15 border-t-white/60 motion-safe:animate-spin" />
  </div>
);

export default CanvasPlaceholder;
