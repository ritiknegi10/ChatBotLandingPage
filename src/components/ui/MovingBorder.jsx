import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

// const MovingBorder =
//   ({
//     children,
//     borderRadius = "0.5rem",
//     borderClassName,
//     duration = 2000,
//     rx = "30%",
//     ry = "30%",
//   }) =>
//   (WrappedComponent) =>
//   (props) => {
//     const pathRef = useRef();
//     const progress = useMotionValue(0);

//     useAnimationFrame((time) => {
//       const length = pathRef.current?.getTotalLength();
//       if (length) {
//         const pxPerMillisecond = length / duration;
//         progress.set((time * pxPerMillisecond) % length);
//       }
//     });

//     const x = useTransform(
//       progress,
//       (val) => pathRef.current?.getPointAtLength(val).x
//     );
//     const y = useTransform(
//       progress,
//       (val) => pathRef.current?.getPointAtLength(val).y
//     );

//     const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

//     return (
//       <div
//         className="relative"
//         style={{
//           borderRadius: borderRadius,
//           overflow: "hidden",
//         }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//           className="absolute h-full w-full"
//           width="100%"
//           height="100%"
//           style={{ zIndex: 0 }} // Ensure SVG is behind content
//         >
//           <rect
//             fill="none"
//             width="100%"
//             height="100%"
//             rx={rx}
//             ry={ry}
//             ref={pathRef}
//           />
//         </svg>
//         <motion.div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             display: "inline-block",
//             transform,
//             zIndex: 1, // Ensure this div is above the SVG but below the content
//           }}
//         >
//           <div className={borderClassName} />
//         </motion.div>
//         <div style={{ position: "relative", zIndex: 2 }}>
//           {" "}
//           {/* Ensure content is on top */}
//           {children}
//           <WrappedComponent {...props} />
//         </div>
//       </div>
//     );
//   };
export default function MovingBorder({ children, WrappedComponent, ...props }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
        {/* Placeholder for moving border logic */}
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Ensure content is on top */}
        {children}
        <WrappedComponent {...props} />
      </div>
    </div>
  );
}
