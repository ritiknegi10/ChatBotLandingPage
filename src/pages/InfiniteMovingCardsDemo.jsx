import React, { useEffect, useState, useRef } from "react";
import userFriendly from "../assets/images/easy.jpg";
import { cn } from "../utils/cn";
import { Card, CardContent } from "@mui/material";
import HoverBorderGradient from "../components/ui/HoverBorderGradient";
import MovingBorder from "../components/ui/MovingBorder";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export const InfiniteMovingCardsDemo = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);
  const [hoverStates, setHoverStates] = useState(() => items.map(() => false)); // Initialize all as not hovered

  const handleMouseEnter = (index) => {
    setHoverStates((current) =>
      current.map((state, i) => (i === index ? true : state))
    );
  };

  const handleMouseLeave = (index) => {
    setHoverStates((current) =>
      current.map((state, i) => (i === index ? false : state))
    );
  };

  useEffect(() => {
    addAnimation();
    return () => {
      // Cleanup if needed
    };
  }, []);
  const radius = 200;
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item, index) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.key = `duplicate-${index}`; // Assign a unique key for React
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "30s" : speed === "normal" ? "80s" : "120s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <motion.div
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
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="p-[2px] rounded-3xl transition duration-300 group/input"
          >
            <Card
              key={idx}
              className="m-2 rounded-xl bg-white text-white"
              style={{
                background: "#1B1F23 ",
                // background: "rgba(255, 255, 255, 0.05)",
                borderRadius: 24,
                // boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
                // backdropFilter: "blur(5.7px)",
                // WebkitBackdropFilter: "blur(6.7px)",
                // border: "1px solid rgba(255, 255, 255, 0.35)",
              }}
            >
              {/* <motion.div
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
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-[2px] rounded-lg transition duration-300 group/input"
              > */}
              <CardContent
                style={{
                  height: "400px",
                  width: "500px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 32,
                  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5.7px)",
                  WebkitBackdropFilter: "blur(6.7px)",
                  border: "1px solid rgba(255, 255, 255, 0.35)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="p-4 shadow rounded-2xl text-center w-full text-white">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "100%",
                      justifyContent: "center",
                    }} // Center the motion.div horizontally and vertically
                  >
                    <img
                      src={userFriendly}
                      alt="User Friendly"
                      className="w-full h-48 object-cover mb-4"
                    />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-8">{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </CardContent>
              {/* </motion.div> */}
            </Card>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};
