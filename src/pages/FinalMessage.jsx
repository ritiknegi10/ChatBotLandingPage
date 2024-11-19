import React from "react";

export function FinalMessage() {
  return (
    <div className="h-[25rem] w-full  bg-primary bg-grid-white/[0.2] relative flex flex-col items-center justify-center text-center px-4 ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 ">
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Unlock the <span className="text-indigo-500">Future</span> of Coding
          Now!
        </h1>
        <p className="text-neutral-400 mt-4 mb-8">
          Sign in to get started with our amazing features and create your own
          chatbot now
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black  border-white text-white py-2 px-4 rounded-lg shadow-md  transition duration-300">
            Get Started
          </button>
          <button className="border bg-black border-white text-white py-2 px-4 rounded-lg shadow-md transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

// export function FinalMessage() {
//   return (
//     <div className="h-[50rem] w-full bg-primary bg-grid-white/[0.2]  relative flex items-center justify-center">
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
//         Backgrounds
//       </p>
//     </div>
//   );
// }
