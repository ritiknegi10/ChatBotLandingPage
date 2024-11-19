import React, { useEffect } from "react";
import { FlipWords } from "../components/ui/flipWords";
import "../assets/css/global.css";
import "aos/dist/aos.css";
import Aos from "aos";

export function FlipWordsDemo() {
  const words = ["intelligent", "intuitive", "responsive"];
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // });
  return (
    <div className="" data-aos="zoom-in">
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-primary via-gray-800 to-primary">
        <div className="text-center my-6">
          <h1
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white mb-2 "
            style={{ fontSize: 80 }}
          >
            Your AI Chatbot to
          </h1>
          <h1
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400"
            style={{ fontSize: 72 }}
          >
            Revolutionize your business
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Our chatbot integrate with your existing software, automating your
            workflows and chat with your clients.
            <br />
            Increase your customer interaction and user experience with our ai
            chatbot
          </p>
        </div>
      </div>
      {/* <div className="  h-[8rem] flex justify-center items-center px-4">
        <div className=" mx-auto font-normal text-neutral-100 ">
          <h1 className="text-4xl text-indigo-500 font-bold	">
            Transform Your Customer Experience with Our AI Chatbot <br />
          </h1>

          <p className="mt-2  text-center	">
            {" "}
            Revolutionize your business interactions with{" "}
            <FlipWords words={words} />
            chat solutions
          </p>
        </div>
      </div> */}
    </div>
  );
}
