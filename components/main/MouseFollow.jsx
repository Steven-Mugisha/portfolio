"use client";

import { useState, useEffect, useRef } from "react";

const Mousefollow = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const { x, y } = point;
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("pointermove", handlePointerMove);

    handleResize();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`hidden ${
        isMobile ? "mousefollowmobile" : "mousefollow"
      } md:block`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    ></div>
  );
};

export default Mousefollow;
