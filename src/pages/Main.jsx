import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/threeDCard";
import { Link } from "react-router-dom";
import img from "../assets/images/dashboard.png";
import userFriendly from "../assets/images/userFriendly.jpeg";
import HoverBorderGradient from "../components/ui/HoverBorderGradient";
import MovingBorder from "../components/ui/MovingBorder";

const Main = () => {
  // return (
  //   <>
  //     <section
  //       id="Main"
  //       className="  text-white py-12 text-center mb-4 not-italic"
  //     >
  //       <div className="container mx-auto" data-aos="fade-up">
  //         <div className="text-center mt-5">
  //           <h2 className="text-4xl font-bold text-indigo-500">
  //             Humanize your customer interaction{" "}
  //           </h2>
  //           <p className="mt-2">
  //             To aid your growing business and client needs we are here with an
  //             AI powered chatBot that helps you to manage your clients better.
  //           </p>
  //         </div>
  //       </div>

  //       <div className="container mx-auto">
  //         <div className="flex flex-wrap px-4">
  //           <CardContainer className="inter-var">
  //             <CardBody className="bg-primary text-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-solid border-2 border-white">
  //               <CardItem
  //                 translateZ={50}
  //                 className="text-xl font-bold text-white dark:text-white"
  //               >
  //                 No Code
  //               </CardItem>
  //               <CardItem
  //                 as="p"
  //                 translateZ={60}
  //                 className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
  //               >
  //                 Just copy paste code in your component
  //               </CardItem>
  //               <CardItem translateZ={100} className="w-full mt-4">
  //                 <img
  //                   src={noCode}
  //                   height={1000}
  //                   width={1000}
  //                   className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
  //                   alt="thumbnail"
  //                 />
  //               </CardItem>
  //               <div className="flex justify-between items-center mt-20">
  //                 <CardItem
  //                   translateZ={20}
  //                   as={Link}
  //                   to=""
  //                   target="__blank"
  //                   className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
  //                 >
  //                   Read more →
  //                 </CardItem>
  //                 <CardItem
  //                   translateZ={20}
  //                   as="button"
  //                   className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
  //                 >
  //                   Sign up
  //                 </CardItem>
  //               </div>
  //             </CardBody>
  //           </CardContainer>
  //           <CardContainer className="inter-var mx-4">
  //             <CardBody className="bg-primary text-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-solid border-2 border-white">
  //               <CardItem
  //                 translateZ={50}
  //                 className="text-xl font-bold text-white dark:text-white"
  //               >
  //                 Easy to use
  //               </CardItem>
  //               <CardItem
  //                 as="p"
  //                 translateZ={60}
  //                 className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
  //               >
  //                 Fastest way to intigrate chatbot in your application
  //               </CardItem>
  //               <CardItem translateZ={100} className="w-full mt-4">
  //                 <img
  //                   src={easy}
  //                   height={1000}
  //                   width={1000}
  //                   className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
  //                   alt="thumbnail"
  //                 />
  //               </CardItem>
  //               <div className="flex justify-between items-center mt-20">
  //                 <CardItem
  //                   translateZ={20}
  //                   as={Link}
  //                   to=""
  //                   target="__blank"
  //                   className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
  //                 >
  //                   Try now →
  //                 </CardItem>
  //                 <CardItem
  //                   translateZ={20}
  //                   as="button"
  //                   className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
  //                 >
  //                   Sign up
  //                 </CardItem>
  //               </div>
  //             </CardBody>
  //           </CardContainer>
  //           {/* <CardContainer className="inter-var">
  //             <CardBody className="bg-primary text-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-solid border-2 border-white">
  //               <CardItem
  //                 translateZ={50}
  //                 className="text-xl font-bold text-white dark:text-white"
  //               >
  //                 No Code
  //               </CardItem>
  //               <CardItem
  //                 as="p"
  //                 translateZ={60}
  //                 className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
  //               >
  //                 Just copy paste code in your component
  //               </CardItem>
  //               <CardItem translateZ={100} className="w-full mt-4">
  //                 <img
  //                   src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //                   height={1000}
  //                   width={1000}
  //                   className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
  //                   alt="thumbnail"
  //                 />
  //               </CardItem>
  //               <div className="flex justify-between items-center mt-20">
  //                 <CardItem
  //                   translateZ={20}
  //                   as={Link}
  //                   to="https://twitter.com/mannupaaji"
  //                   target="__blank"
  //                   className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
  //                 >
  //                   Try now →
  //                 </CardItem>
  //                 <CardItem
  //                   translateZ={20}
  //                   as="button"
  //                   className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
  //                 >
  //                   Sign up
  //                 </CardItem>
  //               </div>
  //             </CardBody>
  //           </CardContainer> */}
  //           {/* <div
  //             className="w-full md:w-1/2 lg:w-1/3 px-2"
  //             data-aos="zoom-in"
  //             data-aos-delay="100"
  //           >
  //             <div className="p-4 shadow rounded-lg flex flex-col items-center">
  //               <img src={noCode} alt="img" className="h-56 w-48" />
  //               <h4 className="mt-4 font-bold">No Code</h4>
  //               <p className="mt-2">
  //                 Lorem Ipsum is simply dummy text of the printing and
  //                 typesetting industry
  //               </p>
  //               <a
  //                 className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
  //                 href="#"
  //               >
  //                 read more
  //               </a>
  //             </div>
  //           </div>

  //           <div
  //             className="w-full md:w-1/2 lg:w-1/3 px-2"
  //             data-aos="zoom-in"
  //             data-aos-delay="200"
  //           >
  //             <div className="p-4 shadow rounded-lg flex flex-col items-center">
  //               <img src={userFriendly} alt="img" className="h-56 w-48" />
  //               <h4 className="mt-4 font-bold">User Friendly Interface</h4>
  //               <p className="mt-2">
  //                 Lorem Ipsum is simply dummy text of the printing and
  //                 typesetting industry
  //               </p>
  //               <a
  //                 className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
  //                 href="#"
  //               >
  //                 read more
  //               </a>
  //             </div>
  //           </div>

  //           <div
  //             className="w-full md:w-1/2 lg:w-1/3 px-2"
  //             data-aos="zoom-in"
  //             data-aos-delay="300"
  //           >
  //             <div className="p-4 shadow rounded-lg flex flex-col items-center">
  //               <img src={loved} alt="img" className="h-56 w-48" />
  //               <h4 className="mt-4 font-bold">Build The Bot Everyone Love</h4>
  //               <p className="mt-2">
  //                 Lorem Ipsum is simply dummy text of the printing and
  //                 typesetting industry
  //               </p>
  //               <a
  //                 className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
  //                 href="#"
  //               >
  //                 read more
  //               </a>
  //             </div>
  //           </div> */}
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
  return (
    <div className="flex justify-center text-center ">
      <HoverBorderGradient
        containerClassName=""
        as="button"
        className=" p-20 text-black flex items-center  rounded-lg"
      >
        <img
          src={img}
          alt="FAQ Image"
          width={1000}
          height={1000}
          className="rounded-lg flex align-self-center mt-4 "
        />
      </HoverBorderGradient>
    </div>
  );
};

export default Main;
