// import { Card, CardContent } from "@mui/material";
// import React from "react";

// import cost from "../assets/images/cost.png";
// import customerExperience from "../assets/images/customerExp.png";
// import engagement from "../assets/images/engagement.png";
// import scalable from "../assets/images/scalable.png";
// import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// const BenefitData = [
//   {
//     icon: (
//       <img
//         src={cost}
//         style={{
//           filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
//         }}
//         alt=""
//         srcset=""
//       />
//     ),
//     title: " Cost Efficiency:",
//     description:
//       " Reduce the need for large customer support teams andoperational costs.",
//   },
//   {
//     icon: (
//       <img
//         src={customerExperience}
//         style={{
//           filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
//         }}
//         alt=""
//         srcset=""
//       />
//     ),
//     title: " Enhanced Customer Experience:",
//     description:
//       "   Engage customers proactively with personalized interactions.",
//   },

//   {
//     icon: (
//       <img
//         src={engagement}
//         alt=""
//         style={{
//           filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
//         }}
//         srcset=""
//       />
//     ),
//     title: "Increased Engagement:",
//     description:
//       "  Engage customers proactively with personalized interactions",
//   },
//   {
//     icon: (
//       <img
//         src={scalable}
//         alt=""
//         style={{
//           filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
//         }}
//         srcset=""
//       />
//     ),
//     title: "   Scalability:",
//     description:
//       "  Easily scale to handle more queries as your business grows.",
//   },
// ];
// const Benefits = ({ benefit }) => {
//   const radius = 200; // Adjust as needed
//   const [visible, setVisible] = React.useState(false);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({ currentTarget, clientX, clientY }) {
//     let { left, top } = currentTarget.getBoundingClientRect();

//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }
//   return (
//     <div>
//       <section id="Benefits h-screen" className="py-12">
//         <div className="container mx-auto  " data-aos="fade-up">
//           <div className="flex flex-nowrap mx-4">
//             <div className="w-full overflow-x-hidden px-4">
//               <div className="py-5 pr-5">
//                 <h2 className="font-bold text-4xl text-center">
//                   <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">
//                     Why Choose Our AI Chatbot?
//                   </span>
//                 </h2>
//                 {/* start */}
//                 <div className="gap-15 flex  overflow-x-auto justify-between my-10">
//                   <motion.div
//                     style={{
//                       background: useMotionTemplate`
//                         radial-gradient(
//                           ${
//                             visible ? radius + "px" : "0px"
//                           } circle at ${mouseX}px ${mouseY}px,
//                           var(--blue-500),
//                           transparent 80%
//                         )
//                       `,
//                     }}
//                     onMouseMove={handleMouseMove}
//                     onMouseEnter={() => setVisible(true)}
//                     onMouseLeave={() => setVisible(false)}
//                     className="p-[2px] rounded-lg transition duration-300 group/input"
//                   >
//                     <div className="bg-primary flex ">
//                       {BenefitData.map((benefit) => (
//                         <motion.div
//                           style={{
//                             background: useMotionTemplate`
//                            radial-gradient(
//                              ${
//                                visible ? radius + "px" : "0px"
//                              } circle at ${mouseX}px ${mouseY}px,
//                              var(--blue-500),
//                              transparent 80%
//                            )
//                          `,
//                           }}
//                           onMouseMove={handleMouseMove}
//                           onMouseEnter={() => setVisible(true)}
//                           onMouseLeave={() => setVisible(false)}
//                           className="p-[2px] rounded-3xl transition duration-300 group/input"
//                         >
//                           <div className="p-8 bg-opacity-0">
//                             <Card
//                               className="m-2 rounded-xl overflow-x-auto bg-primary border-white border-2 "
//                               style={{
//                                 background: "#1B1F23 ",
//                                 // background: "rgba(255, 255, 255, 0.05)",
//                                 borderRadius: 24,
//                                 // boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
//                                 // backdropFilter: "blur(5.7px)",
//                                 // WebkitBackdropFilter: "blur(6.7px)",
//                                 // border: "1px solid rgba(255, 255, 255, 0.35)",
//                               }}
//                             >
//                               <CardContent
//                                 className="p-6 space-y-4  "
//                                 style={{
//                                   // background: "#1B1F23 ",
//                                   background: "rgba(255, 255, 255, 0.05)",
//                                   borderRadius: 24,
//                                   boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
//                                   backdropFilter: "blur(5.7px)",
//                                   WebkitBackdropFilter: "blur(6.7px)",
//                                   border: "1px solid rgba(255, 255, 255, 0.35)",
//                                 }}
//                               >
//                                 <div className="flex justify-center ">
//                                   <motion.div
//                                     whileHover={{ scale: 1.1 }}
//                                     transition={{
//                                       type: "spring",
//                                       stiffness: 400,
//                                       damping: 10,
//                                     }}
//                                     style={{
//                                       display: "flex",
//                                       marginLeft: "auto",
//                                       marginRight: "auto",
//                                       width: "100%",
//                                       justifyContent: "center",
//                                     }} // Center the motion.div horizontally and vertically
//                                   >
//                                     <div
//                                     // className="shadow-xl	"
//                                     // className="bg-gray-100 rounded-full p-3 dark:bg-gray-800"
//                                     // style={{
//                                     //   background: "rgba(255, 255, 255, 0.14)",
//                                     //   borderRadius: "200px",

//                                     //   backdropFilter: "blur(9px)",
//                                     //   WebkitBackdropFilter: "blur(12px)",
//                                     //   border: "1px solid rgba(255, 255, 255, 0.83)",
//                                     // }}
//                                     >
//                                       {/* <RocketIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" /> */}
//                                       {benefit.icon}
//                                     </div>
//                                   </motion.div>
//                                 </div>
//                                 <div className="text-center space-y-2">
//                                   <h3 className="text-xl text-white font-bold">
//                                     {benefit.title}
//                                   </h3>
//                                   <p className=" text-white text-dark text-lg">
//                                     {benefit.description}
//                                   </p>
//                                 </div>
//                               </CardContent>
//                             </Card>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* end */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Benefits;

import { Card, CardContent } from "@mui/material";
import React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

import cost from "../assets/images/cost.png";
import customerExperience from "../assets/images/customerExp.png";
import engagement from "../assets/images/engagement.png";
import scalable from "../assets/images/scalable.png";

const BenefitData = [
  {
    icon: cost,
    title: "Cost Efficiency:",
    description:
      "Reduce the need for large customer support teams and operational costs.",
  },
  {
    icon: customerExperience,
    title: "Customer Experience:",
    description: "Engage customers proactively with personalized interactions.",
  },
  {
    icon: engagement,
    title: "Increased Engagement:",
    description: "Engage customers proactively with personalized interactions.",
  },
  {
    icon: scalable,
    title: "Scalability:",
    description: "Easily scale to handle more queries as your business grows.",
  },
];

const BenefitCard = ({ benefit, mouseX, mouseY, radius, visible }) => (
  <motion.div
    style={{
      background: useMotionTemplate`
        radial-gradient(
          ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
    }}
    className="p-[2px] rounded-2xl transition duration-300 group/input"
  >
    <div className="p-8 bg-primary rounded-2xl">
      <Card
        className="m-2 rounded-xl  bg-primary border-white border-2"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: 24,

          height: "50vh", // Fixed height
          width: "15vw", // Fixed width
        }}
      >
        <CardContent
          className="p-6 space-y-4"
          style={{
            // background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 24,
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5.7px)",
            WebkitBackdropFilter: "blur(6.7px)",
            // border: "1px solid rgba(255, 255, 255, 0.35)",
          }}
        >
          <div className="flex justify-center">
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
              }}
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                style={{
                  filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
                }}
              />
            </motion.div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl text-white font-bold">{benefit.title}</h3>
            <p className="text-white text-dark text-lg">
              {benefit.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </motion.div>
);

const Benefits = () => {
  const radius = 200; // Adjust as needed
  const [visible, setVisible] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section id="Benefits" className="py-12">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="flex flex-nowrap mx-4">
          <div className="w-full overflow-x-hidden px-4">
            <div className="py-5 pr-5">
              <h2 className="font-bold text-4xl text-center">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">
                  Why Choose Our AI Chatbot?
                </span>
              </h2>
              <div className="gap-15 flex h-full w-full overflow-auto p- justify-between my-10">
                {BenefitData.map((benefit, index) => (
                  <motion.div
                    key={index}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                  >
                    <BenefitCard
                      benefit={benefit}
                      mouseX={mouseX}
                      mouseY={mouseY}
                      radius={radius}
                      visible={visible}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
