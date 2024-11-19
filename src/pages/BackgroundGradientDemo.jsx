import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient
        className="rounded-[22px]  p-4 sm:p-10 bg-seventh"
        style={{
          height: "400px",
          width: "500px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: 24,
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5.7px)",
          WebkitBackdropFilter: "blur(6.7px)",
          border: "1px solid rgba(255, 255, 255, 0.35)",
          display: "flex", // Ensure Card is a flex container
          flexDirection: "column", // Stack children vertically
        }}
      >
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          START FREE TRAIL NOW
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Enjoy your free trial for 30 days. Then decide if you want to keep it.
          You can switch to a paid plan at any time. Check for various plans and
          choose the one that fits your needs. We have multiple payment options
          available. Pay with credit card, PayPal, or bank transfer.
        </p>
        <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Start Now </span>
          {/* <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span> */}
        </button>
      </BackgroundGradient>
    </div>
  );
}
