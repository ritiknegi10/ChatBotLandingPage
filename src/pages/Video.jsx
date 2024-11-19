import React from "react";
import img from "../assets/images/webvideo.png";
import HoverBorderGradient from "../components/ui/HoverBorderGradient";
const Video = () => {
  return (
    <section id="Video" className="text-center h-screen text-white">
      <div className="relative">
        <div className="container mx-auto px-4" data-aos="zoom-in">
          <div className="flex justify-center">
            <div
              className="py-5 pr-5"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h2 className="font-bold text-4xl">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">
                  Here's how it works
                </span>
              </h2>
              <p className="my-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white">
                Experience our AI Chatbot firsthand. Interact with our demo to
                see how it can transform your customer interactions.
              </p>

              <div className="flex justify-center text-center ">
                <HoverBorderGradient
                  containerClassName=""
                  as="button"
                  className="text-black flex items-center bg-black rounded-lg"
                  style={{ height: "80vh" }} // Set the height to 75% of the viewport height
                >
                  <img
                    src={img}
                    alt="FAQ Image"
                    className="rounded-lg flex align-self-center mt-4 mx-40 max-sm:mx-auto "
                    style={{ maxHeight: "100%" }} // Ensure the image does not exceed the container's height
                  />
                </HoverBorderGradient>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section id="Video" className="text-center h-screen text-white">
  //     <div className="relative">
  //       <div className="container mx-auto px-4" data-aos="zoom-in">
  //         <div className="flex justify-center">
  //           <div
  //             className="py-5 pr-5"
  //             data-aos="fade-left"
  //             data-aos-delay="100"
  //           >
  //             <h2 className="font-bold text-4xl">
  //               <span className="text-indigo-500">
  //                 Why Choose Our AI Chatbot?
  //               </span>
  //             </h2>
  //             <p className="mt-4">
  //               Experience our AI Chatbot firsthand. Interact with our demo to
  //               see how it can transform your customer interactions.
  //             </p>
  //             <img
  //               src={img}
  //               alt="FAQ Image"
  //               width={800}
  //               height={700}
  //               className="rounded-lg flex align-self-center mt-4 "
  //             />
  //             <button
  //               type="button"
  //               class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4"
  //             >
  //               Get Started
  //             </button>
  //           </div>

  //           <a
  //             href="https://www.youtube.com/watch?v=jDDaplaOz7Q&amp;feature=emb_title"
  //             className="glightbox"
  //           >
  //             <div className="w-16 h-16 bg-center bg-no-repeat bg-cover"></div>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Video;
