import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { ContactUs } from "./ContactUs";
import Modal from "../components/modal/Modal";

const Headbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-primary via-gray-800 to-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
        <header className="flex h-20 w-full shrink-0 items-center justify-center px-4 md:px-6  text-gray-400">
          {/* <Link href="#" className="flex items-center" prefetch={false}>
            <span className="text-lg font-semibold">ITBCO In</span>
          </Link> */}
          <nav className="text-center flex gap-6">
            <a className="no-underline hover:text-white" href="#About">
              About
            </a>
            <a className="no-underline hover:text-white" href="#Features">
              Features
            </a>
            <a className="no-underline hover:text-white " href="#Pricing">
              Pricing
            </a>
            <a className="no-underline hover:text-white" href="#Contact">
              Contact Us
            </a>
          </nav>
          <div id="">
            <div className="flex justify-end mx-8 text-center items-center">
              <button onClick={openModal} className="text-white bg-black">
                Contact Us
              </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <ContactUs />
            </Modal>
          </div>
        </header>
      </div>{" "}
      <div className="relative w-full">
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
};
export default Headbar;
