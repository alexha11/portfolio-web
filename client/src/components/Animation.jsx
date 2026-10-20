import { useEffect, useRef } from 'react';

// Magnetic hover: the icon eases toward the pointer and springs back on leave.
// Listeners live on the element itself and are removed on unmount (the old version
// leaked a window "mousemove" listener on every hover). Skipped on touch screens
// and when the user prefers reduced motion.
const HoverButton = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return;

    let center = { x: 0, y: 0 };

    const onEnter = () => {
      const { left, top, width, height } = el.getBoundingClientRect();
      center = { x: left + width / 2, y: top + height / 2 };
      el.style.zIndex = '10';
    };

    const onMove = (e) => {
      el.style.transition = 'transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)';
      el.style.transform = `translate(${(e.clientX - center.x) * 0.4}px, ${(e.clientY - center.y) * 0.4}px) scale(1.15)`;
    };

    const onLeave = () => {
      el.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'; // overshoot, like the old elastic ease
      el.style.transform = '';
      el.style.zIndex = '';
    };

    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-12 h-12 rounded-full">
      {children}
    </div>
  );
};

export default HoverButton;
