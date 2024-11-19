import React from "react";
import newGif from "../assets/gif/botGif.gif";
import chatGif from "../assets/gif/ChatGig.gif";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-center ">
      <section id="Hero" className=" text-white mt-10 mx-5 size-full">
        <div className="container mx-auto text-center" data-aos="fade-in">
          {/* <div className="mb-8">
            <h3 className="text-3xl font-bold">Welcome to ITBCO ChatBot</h3>
            <h5 className="text-xl mt-2">
              We provide for Startups, Apps &amp; more...
            </h5>
          </div> */}
          <div className="flex flex-col items-center">
            <img
              src={chatGif}
              alt="Hero Imgs"
              data-aos="zoom-out"
              data-aos-delay="100"
              className="h-1/2 w-1/2 mb-8"
              style={{ height: "40vh", width: "20vw" }}
            />

            {/* <a
              href="#get-started"
              className="btn btn-success text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </a> */}
          </div>

          <a className="no-underline hover:underline" href="#About">
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Get Started
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
