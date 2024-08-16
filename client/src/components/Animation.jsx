import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const HoverButton = ({ children }) => {
  const [hover, setHover] = useState(false);
  const buttonRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    const el = buttonRef.current;

    const calculatePosition = () => {
      const { left, top, width, height } = el.getBoundingClientRect();
      positionRef.current = {
        x: left + width / 2,
        y: top + height / 2,
        width,
        height,
      };
      gsap.set(el, { x: 0, y: 0, scale: 1 });
    };

    const onMouseMove = (e) => {
      const { x, y, width } = positionRef.current;
      const dx = e.clientX - x;
      const dy = e.clientY - y;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);
      const isHovering = distance < width * (hover ? 0.7 : 0.5);

      if (isHovering !== hover) {
        setHover(isHovering);
        isHovering ? onHover(e.clientX, e.clientY) : onLeave();
      }
    };

    const onHover = (x, y) => {
      gsap.to(el, {
        x: (x - positionRef.current.x) * 0.4,
        y: (y - positionRef.current.y) * 0.4,
        scale: 1.15,
        ease: 'power2.out',
        duration: 0.4,
      });
      el.style.zIndex = 10;
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.7,
      });
      el.style.zIndex = 1;
    };

    const handleMouseEnter = () => {
      calculatePosition();
      window.addEventListener('mousemove', onMouseMove);
    };

    const handleMouseLeave = () => {
      window.removeEventListener('mousemove', onMouseMove);
      onLeave();
      setHover(false);
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', calculatePosition);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [hover]);

  return (
    <div ref={buttonRef} className="w-12 h-12 rounded-full">
      {children}
    </div>
  );
};

export default HoverButton;
