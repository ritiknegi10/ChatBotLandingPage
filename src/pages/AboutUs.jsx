import React from "react";
import chatBot from "../assets/images/chatBot.png";
const AboutUs = () => {
  return (
    <section id="About" className="py-12">
      <div className="container mx-auto px-4 text-white" data-aos="fade-up">
        <div className="flex flex-wrap  mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <img
              src={chatBot}
              alt="About"
              data-aos="zoom-in"
              data-aos-delay="100"
              className="w-full"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-2/3 px-4">
            <div
              className="py-5 pr-5"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h2 className="font-bold text-2xl text-indigo-500">
                About Our <span className="text-">AI Chatbot</span>
              </h2>
              <p className="mt-4">
                Our AI Chatbot is more than just a digital assistant. It's a
                comprehensive solution powered by advanced machine learning
                algorithms and natural language processing to understand and
                respond to customer queries in real time. Whether you need it
                for customer support, lead generation, or personalized
                recommendations, our chatbot adapts to your needs seamlessly."
              </p>

              <ul className="list-none mt-4 space-y-2">
                <li className="flex items-center">
                  <i className="vi bi-chevron-right"></i>Creative Design
                </li>
                <li className="flex items-center">
                  <i className="vi bi-chevron-right"></i>Retina Ready
                </li>

                <li className="flex items-center">
                  <i className="vi bi-chevron-right"></i>Unlimited Features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
