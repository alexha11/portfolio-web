// Fills its (fixed-size) parent while a 3D scene's code and assets load.
const CanvasPlaceholder = () => (
  <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
    <span className="h-8 w-8 rounded-full border-2 border-line border-t-muted motion-safe:animate-spin" />
  </div>
);

export default CanvasPlaceholder;
