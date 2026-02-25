"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  blur?: boolean;
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.2, 
  duration = 0.5,
  y = 40,
  x = 0,
  blur = true
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: y,
            x: x,
            filter: blur ? "blur(10px)" : "none"
          },
          visible: { 
            opacity: 1, 
            y: 0,
            x: 0,
            filter: "blur(0px)"
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
