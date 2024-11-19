import { Avatar, Card } from "@mui/material";
import React from "react";
import { BsQuote } from "react-icons/bs";

const Reviews = () => {
  return (
    // <div>
    //   <section id="testimonials" className="p-10 text-center text-white ">
    //     <div className="container mx-auto flex flex-col bg-gray-800 items-center justify-center m-5 p-3 shadow-lg rounded-lg">
    //       <div className="flex justify-center">
    //         <div className="w-2/3">
    //           <div className="testimonials-content">
    //             <div id="carousel-example-generic" className="carousel slide">
    //               <div className="carousel-inner rounded-lg">
    //                 <div className="carousel-item active">
    //                   <div className="top-top">
    //                     <h2 className="text-2xl font-bold">
    //                       Our Users Speak volumes us
    //                     </h2>
    //                     <p className="mt-4 text-lg">
    //                       Lorem Ipsum is simply dummy text of the printing and
    //                       typesetting industry. Lorem Ipsum has been the
    //                       industry's standard dummy text ever since the 1500s,
    //                       when an unknown printer took a galley of type and
    //                       scrambled it to make a type specimen book. It has
    //                       survived not only five centuries.
    //                     </p>
    //                     <h4 className="mt-4 text-xl font-bold">
    //                       Kimberly Tran
    //                       <span className="text-base font-normal">manager</span>
    //                     </h4>
    //                   </div>
    //                 </div>

    //                 {/* ... other carousel items ... */}
    //               </div>

    //               <div className="btm-btm">
    //                 <ul className="list-none flex justify-center space-x-2">
    //                   <li className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer"></li>
    //                   <li className="w-2 h-2 bg-gray-300 rounded-full cursor-pointer"></li>
    //                   <li className="w-2 h-2 bg-gray-300 rounded-full cursor-pointer"></li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className=" text-white  py-12 mt-24" id="Reviews">
      <div className="text-center mb-8">
        <h2 className=" pb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">
          What our Clients are saying about us!
        </h2>
      </div>
      <div className="flex justify-center gap-12 p-5 ">
        <Card
          className="bg-black border-white border-rounded-lg p-6 w-auto"
          style={{
            borderRadius: 12,
            backgroundColor: "#000000",
            border: "1px solid #ffffff",
          }}
        >
          <div className="flex items-start mb-4">
            <BsQuote className="text-yellow-700 w-8 h-8" />
          </div>
          <p className="text-lg mb-4 text-white">
            "Our website's user interaction improved significantly with
            ChatbotPro."
          </p>
          <div className="flex items-center mt-4">
            <Avatar src="/placeholder-user.jpg" alt="JD">
              JD
            </Avatar>
            <div className="ml-4">
              <p className="font-semibold text-white">Jane Doe</p>
              <p className="text-sm text-gray-500">Founder, Tech Innovators</p>
            </div>
          </div>
        </Card>
        <Card
          className="bg-[#60a5fa] rounded-lg p-6 w-auto"
          style={{
            borderRadius: 12,
            backgroundColor: "#000000",
            border: "1px solid #ffffff",
          }}
        >
          <div className="flex items-start mb-4">
            <BsQuote className="text-yellow-700 w-8 h-8" />
          </div>
          <p className="text-lg mb-4 text-white">
            "Embedding the chatbot was incredibly easy and effective."
          </p>
          <div className="flex items-center mt-4">
            <Avatar src="/placeholder-user.jpg" alt="JS">
              JS
            </Avatar>
            <div className="ml-4">
              <p className="font-semibold text-white">John Smith</p>
              <p className="text-sm text-gray-500">CEO, Market Leaders</p>
            </div>
          </div>
        </Card>
        <Card
          className="bg-[#60a5fa] rounded-lg p-6 w-auto"
          style={{
            borderRadius: 12,
            backgroundColor: "#000000",
            border: "1px solid #ffffff",
          }}
        >
          <div className="flex items-start mb-4">
            <BsQuote className="text-yellow-700 w-8 h-8" />
          </div>
          <p className="text-lg text-white mb-4">
            "Customer queries are now handled seamlessly with ChatbotPro."
          </p>
          <div className="flex items-center mt-4">
            <Avatar src="/placeholder-user.jpg" alt="AJ">
              AJ
            </Avatar>
            <div className="ml-4">
              <p className="font-semibold text-white">Alice Johnson</p>
              <p className="text-sm text-gray-500">
                Manager, Digital Solutions
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
