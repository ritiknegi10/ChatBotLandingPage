import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Dashboard from "./pages/Dashboard";
import Hero from "./pages/Hero";
import Layout from "./layout/Layout";
import { TracingBeamDemo } from "./pages/TracingBeamDemo";

function App() {
  //usestate for dummy signing

  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="/" element={<TracingBeamDemo />}>
        {/* <Route index element={<Dashboard />} /> */}
        {/* <Route path="Hero" element={<Hero />} /> */}

        {/* <Route path="Chatbots">
            <Route index element={<Chatbots />} />
            <Route path=":id">
              <Route index element={<Chatbot />} />
              <Route path="Corpus" element={<Corpus />} />
              <Route path="Payment" element={<CreatePayment />} />
              <Route path="Doc" element={<Doc />} />
            </Route>
            <Route path="create" element={<CreateChatbot />} />
          </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
