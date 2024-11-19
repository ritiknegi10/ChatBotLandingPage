import React from "react";
import { cn } from "../..//utils/cn"; // Adjust this path according to your project structure
import HoverBorderGradient from "./HoverBorderGradient";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-8 gap-4 max-w-7xl mx-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className, // This contains grid span classes among others
  title,
  description,
  header,
  icon,
}) => {
  const radius = 200;
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Apply className to the outer motion.div to correctly set grid column spans
  return (
    <motion.div
      className={`${className} w-full h-full`} // Ensure className includes grid layout classes if this is the container
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? radius + "px" : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%

          )
        `,
        borderRadius: 16, // Adjust this to match the rounded corners of the Card component
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="p-[2px] rounded-lg transition duration-300 group/input w-full h-full">
        {" "}
        {/* Adjusted for full width and height */}
        <div className="row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4 relative overflow-hidden w-full h-full">
          {" "}
          {/* Adjusted for full width and height */}
          <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-300">
            {description}
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              justifyContent: "center",
            }} // Center the motion.div horizontally and vertically
          >
            <div className="border rounded-2xl  bg-slate-950 m-3 border-gray-900 justify-between items-center flex">
              {" "}
              {header}
            </div>
          </motion.div>
          <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10 w-full">
            {" "}
            {/* Adjusted for full width */}
            {icon}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
