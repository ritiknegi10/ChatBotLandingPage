import React from "react";
import userFriendly from "../assets/images/userFriendly.jpeg";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

const features = [
  {
    name: "Intelligent Responses",
    description:
      "Our chatbot learns from interactions to provide increasingly accurate and relevant responses.",
  },

  {
    name: "     24/7 Availability",
    description:
      "Never miss a customer query. Our chatbot is available around the clock.",
  },
  {
    name: "Easy Integration",
    description:
      " Seamlessly integrates with your existing systems and platforms.",
  },
  {
    name: " Multi Language Support",
    description: "Communicate with customers in their preferred language.",
  },
  {
    name: " Analytics and Insights",
    description:
      "Gain valuable insights from chatbot interactions to improve your business strategies.",
  },
];

const Features = () => {
  return (
    <section
      id="Features"
      className="pt-16 text-center w-full h-screen  text-white"
    >
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="my-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">
            Amazing Features
          </h2>
          <p className="mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white mb-5">
            Here are few amazing features that we provide for our customers
          </p>
        </div>

        <InfiniteMovingCardsDemo items={features} className={"grid"} />
      </div>
    </section>
  );
};

export default Features;
