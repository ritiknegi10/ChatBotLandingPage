import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/beam";
import Dashboard from "./Dashboard";

export function TracingBeamDemo({ children }) {
  return (
    <TracingBeam className="">
      <div className="  antialiased pt-4 relative" style={{ marginLeft: 80 }}>
        <Dashboard />
      </div>
    </TracingBeam>
  );
}
