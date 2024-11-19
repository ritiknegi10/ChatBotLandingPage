import { Card, CardContent } from "@mui/material";
import React from "react";
import Integration from "../assets/images/integartion.png";
import Customization from "../assets/images/customization.png";
import Launch from "../assets/images/scalable.png";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import easy from "../assets/images/easy.jpg";
import noCode from "../assets/images/noC.webp";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const items = [
  {
    icon: (
      <img
        src={Customization}
        alt="rocket"
        style={{
          height: "150px",
          width: "150px",
          filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
        }}
      />
    ),
    title: " Customization",
    className: "md:col-span-2 text-center w-full h-100 ",

    description:
      "Go live and continuously optimize based on analytics and feedback.",
  },
  {
    icon: (
      <img
        src={noCode}
        alt="rocket"
        style={{
          height: "170px",
          width: "400px",
          filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
        }}
      />
    ),
    title: "   No Code",
    className: "md:col-span-4 text-center w-full h-100 ",

    description: " Just copy paste code in your component",
  },
  {
    icon: (
      <img
        src={Integration}
        alt="rocket"
        style={{
          height: "150px",
          width: "150px",
          filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
        }}
      />
    ),
    title: "  Integration",
    className: "md:col-span-2 text-center w-full h-100 ",

    description:
      "  Easily integrate the chatbot with your existing website or app.",
  },
  {
    icon: (
      <img
        src={Launch}
        alt="rocket"
        style={{
          height: "150px",
          width: "150px",
          filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
        }}
      />
    ),
    title: "  Launch and Optimize:",
    className: "md:col-span-4 text-center w-full h-100 ",

    description:
      "Go live and continuously optimize based on analytics and feedback.",
  },

  {
    icon: (
      <img
        src={easy}
        alt="rocket"
        style={{
          height: "170px",
          width: "350px",
          filter: "drop-shadow(5px 4px 30px rgba(244, 244, 240, 0.1))",
        }}
      />
    ),
    title: " Easy to use",
    className: "md:col-span-4 text-center w-full h-100 ",

    description: " Fastest way to intigrate chatbot in your application",
  },
];

const Work = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // });
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem] my-8" data-aos="zoom-in">
      {items.map((item, i) => (
        // <LabelInputContainer>

        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
};
export default Work;
