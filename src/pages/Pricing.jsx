import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BackgroundGradient } from "../components/ui/background-gradient";
// import { Card, CardContent, CardHeader } from "@mui/material";
import { MdCheckCircleOutline } from "react-icons/md";
import { Button } from "react-scroll";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import "aos/dist/aos.css";
import Aos from "aos";

const plans = [
  {
    name: "Basic",
    price: "Try free for a month",
    pricing: "Free",
    description: "Best for personal use.",
    features: [
      "Employee directory",
      "Task management",
      "Calendar integration",
      "File storage",
      "Communication tools",
      "Reporting and analytics",
    ],
  },
  {
    name: "Monthly",
    price: "Plan billed monthly   ",
    pricing: "$20",
    pricingDetail: "/per month",

    description: "For large teams & corporations.",
    features: [
      "Employee directory",
      "Task management",
      "Calendar integration",
      "File storage",
      "Communication tools",
      "Reporting and analytics",
    ],
  },
  {
    name: "Yearly",
    price: "Plan billed Yearly",
    pricing: "$15",
    pricingDetail: "/per month",
    description: "Best for business owners.",
    features: [
      "Employee directory",
      "Task management",
      "Calendar integration",
      "File storage",
      "Communication tools",
      "Reporting and analytics",
    ],
  },
];

const Card = ({ plan }) => (
  <div
    className="w-full  shadow-lg rounded-3xl overflow-hidden m-4 px-6 gap-8"
    style={{
      background: "rgba(0, 0, 0, 0.7)",
      borderRadius: 24,
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(5.7px)",
      WebkitBackdropFilter: "blur(6.7px)",
      border: "1px solid rgba(255, 255, 255, 0.35)",
    }}
  >
    <div className="bg-black text-white pt-8 px-8">
      <h2 className="text-3xl text-start font-bold ">{plan.name}</h2>
      <h3 className="text-lg text-start pb-4 text-gray-400 ">{plan.price}</h3>
      <div className="flex content-center items-center">
        {" "}
        <h3 className="text-3xl text-bold text-start ">{plan.pricing}</h3>
        <h3 className="text-md text-center ">{plan.pricingDetail}</h3>
      </div>
    </div>
    <div className="py-8 px-8 space-y-4 text-white items-start ">
      <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-black hover:text-white border mb-4  ">
        Get Started
      </button>
      <div
        className=" "
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.35)",
        }}
      >
        <h3 className="text-lg font-medium mt-4">What you will get</h3>
        <ul className="space-y-2 mt-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-400">
              <MdCheckCircleOutline className="w-5 h-5" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Pricing = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // });
  const radius = 200;
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="Pricing" className=" flex justify-center items-center py-16">
      <div
        className="flex flex-col md:flex-row justify-center items-center"
        data-aos="zoom-in"
      >
        {plans.map((plan, index) => (
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
            <Card key={index} plan={plan} />
          </motion.div>
        ))}
      </div>
    </section>
  );
  // return (
  //   <section
  //     id="Pricing"
  //     className="bg-black flex justify-center items-center "
  //   >
  //     <Card
  //       className="w-full max-w-md bg-black shadow-lg rounded-3xl overflow-hidden"
  //       style={{
  //         background: "rgba(0, 0, 0, 0.7)",
  //         borderRadius: 24,
  //         boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
  //         backdropFilter: "blur(5.7px)",
  //         WebkitBackdropFilter: "blur(6.7px)",
  //         border: "1px solid rgba(255, 255, 255, 0.35)",
  //       }}
  //     >
  //       <div className="bg-black text-white py-6 px-8">
  //         <h2 className="text-xl text-center font-bold">Basic</h2>
  //         <h3 className="text-3xl text-center font-bold">Free</h3>
  //       </div>
  //       <CardContent className="py-8 px-8 space-y-4 text-white">
  //         <Button className="w-full bg-white text-black font-bold py-3 rounded-lg">
  //           Get Started
  //         </Button>
  //         <div>
  //           <h3 className="text-lg font-medium">What you will get</h3>
  //           <ul className="space-y-2 mt-4">
  //             <li className="flex items-center gap-2">
  //               <MdCheckCircleOutline className="w-5 h-5" />
  //               Employee directory
  //             </li>
  //             <li className="flex items-center gap-2">
  //               <MdCheckCircleOutline className="w-5 h-5" />
  //               Task management
  //             </li>
  //             <li className="flex items-center gap-2">
  //               <MdCheckCircleOutline className="w-5 h-5" />
  //               Calendar integration
  //             </li>
  //             <li className="flex items-center gap-2">
  //               <MdCheckCircleOutline className="w-5 h-5" />
  //               File storage
  //             </li>
  //             <li className="flex items-center gap-2">
  //               <MdCheckCircleOutline className="w-5 h-5" />
  //               Communication tools
  //             </li>
  //             <li className="flex items-center gap-2">
  //               <MdCheckCircleOutline className="w-5 h-5" />
  //               Reporting and analytics
  //             </li>
  //           </ul>
  //         </div>
  //       </CardContent>
  //     </Card>
  //   </section>
  // );

  // return (
  //   // <section
  //   //   id="pricing"
  //   //   className="py-12 flex justify-center items-center text-center text-white"
  //   // >
  //   //   <div className="container mx-auto" data-aos="fade-up">
  //   //     <div className="text-center">
  //   //       <h2 className="text-2xl font-bold">Get started with free trail</h2>
  //   //       <p className="mt-2">Sign In to get a 30 day trail free</p>
  //   //     </div>

  //   //     <div className="flex flex-wrap mt-4">
  //   //       {/* <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
  //   //         <div className="p-6 border rounded shadow">
  //   //           <div className="flex flex-col">
  //   //             <h4 className="font-bold">FREE</h4>
  //   //             <p className="mt-4">
  //   //               Our free plan grants access to all premium features, the best
  //   //               plan for short-term subscribers.
  //   //             </p>
  //   //             <div className="flex justify-between mt-4 mb-3">
  //   //               <div className="flex">
  //   //                 <h4 className="font-bold">$39</h4>
  //   //                 <p className="pl-2 pt-1">/month</p>
  //   //               </div>
  //   //               <p className="pt-1">Prices are marked in USD</p>
  //   //             </div>
  //   //             <Link
  //   //               className="btn btn-dark bg-white
  //   //             text-dark w-full"
  //   //               to="/Chatbots/"
  //   //             >
  //   //               <p className="text-dark">Subscribe</p>
  //   //             </Link>
  //   //           </div>
  //   //         </div>
  //   //       </div> */}
  //   //       <div className="d-flex justify-content-between align-items-center">
  //   //         <BackgroundGradient
  //   //           className="rounded-[22px]  p-12 d-flex  bg-seventh"
  //   //           style={{
  //   //             height: "400px",
  //   //             width: "500px",
  //   //             background: "rgba(255, 255, 255, 0.05)",
  //   //             borderRadius: 24,
  //   //             boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
  //   //             backdropFilter: "blur(5.7px)",
  //   //             WebkitBackdropFilter: "blur(6.7px)",
  //   //             border: "1px solid rgba(255, 255, 255, 0.35)",
  //   //             display: "flex", // Ensure Card is a flex container
  //   //             flexDirection: "column", // Stack children vertically
  //   //           }}
  //   //         >
  //   //           <div className="d-flex flex-column ">
  //   //             <div className="">hi</div>
  //   //             <div className="">hi dsfgr wtghrthw gtwgt4hgt</div>
  //   //           </div>
  //   //           <div className="flex justify-center items-center">
  //   //             <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
  //   //               <span>Start Now </span>
  //   //               {/* <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
  //   //   $100
  //   // </span> */}
  //   //             </button>
  //   //           </div>
  //   //         </BackgroundGradient>
  //   //       </div>

  //   //       {/* ... other cards ... */}
  //   //     </div>
  //   //   </div>
  //   // </section>
  //   <section
  //     id="Pricing"
  //     className="bg-danger flex justify-center items-center min-h-screen 	 "
  //   >
  //     <Card
  //       className="w-full max-w-md bg-background shadow-lg rounded-3xl overflow-hidden"
  //       style={{
  //         background: "rgba(255, 255, 255, 0.7)",
  //         borderRadius: 24,
  //         boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
  //         backdropFilter: "blur(5.7px)",
  //         WebkitBackdropFilter: "blur(6.7px)",

  //         border: "1px solid rgba(255, 255, 255, 0.35)",
  //       }}
  //     >
  //       <div className="bg-black text-black py-6 px-8">
  //         <h2 className="text-xl text-center text-white font-bold">
  //           Start Free Trial
  //         </h2>{" "}
  //         {/* Corrected nested CardHeader */}
  //       </div>
  //       <CardContent className="py-8 px-8 space-y-4 ">
  //         <div className="flex flex-row justify-between">
  //           <div className="flex justify-center items-center ps-8 text-2xl	text-black font-bold">
  //             0$/month
  //           </div>
  //           <div className="space-y-2 ">
  //             <h3 className="text-lg font-medium text-black">
  //               Features Included:
  //             </h3>
  //             <ul className="space-y-2 text-muted-foreground text-black">
  //               <li className="flex items-center gap-2">
  //                 <MdCheckCircleOutline className="w-5 h-5 text-black" />
  //                 Unlimited projects
  //               </li>
  //               <li className="flex items-center gap-2">
  //                 <MdCheckCircleOutline className="w-5 h-5 text-black" />
  //                 Collaborative workspace
  //               </li>
  //               <li className="flex items-center gap-2">
  //                 <MdCheckCircleOutline className="w-5 h-5 text-black" />
  //                 Real-time updates
  //               </li>
  //               <li className="flex items-center gap-2">
  //                 <MdCheckCircleOutline className="w-5 h-5 text-black" />
  //                 Detailed analytics
  //               </li>
  //             </ul>
  //           </div>
  //         </div>

  //         <div className="flex justify-center bg-dark">
  //           <Button className="bg-black text-white">Start Now</Button>
  //         </div>
  //       </CardContent>
  //     </Card>
  //   </section>
  // );
};

export default Pricing;
