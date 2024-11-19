import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Button } from "react-scroll";

export default function Footer() {
  return (
    <footer
      className=" py-8 text-white"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.35)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold"> ITBCO</h2>
          <div className="flex mt-4 space-x-4">
            <Link to="#" className=" text-white  py-2    rounded-full">
              <button className="bg-black text-white">Join waitlist</button>
            </Link>
            <Link to="#" className=" text-white  py-2  rounded-full">
              <button className="bg-black text-white">Contact Us</button>
            </Link>
          </div>
          <div className="flex mt-4 space-x-4">
            <Link
              to="#"
              aria-label="Twitter"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link
              to="#"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              to="#"
              aria-label="Discord"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaDiscord className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex space-x-8">
          <div>
            <h4 className="text-sm font-medium">Products</h4>
            <nav className="mt-2">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#About"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-medium">Company</h4>
            <nav className="mt-2">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    Integration
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="container mx-auto px-4 md:px-6 mt-8 text-center text-sm text-gray-400 border-t border-gray-800 pt-4"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.35)",
        }}
      >
        &copy; 2024 ITBCO. All rights reserved.
        <div className="flex justify-center mt-4 space-x-4">
          <Link to="#" className="text-gray-400 hover:underline">
            Terms of Service
          </Link>
          <Link to="#" className="text-gray-400 hover:underline">
            Privacy Policy
          </Link>
          <Link to="#" className="text-gray-400 hover:underline">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaGithubSquare,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitterSquare,
//   FaYoutube,
// } from "react-icons/fa";
// import Input from "../components/form/Input";
// import Button from "../components/form/Button";

// export default function Footer() {
//   return (
//     <footer
//       className="bg-muted py-8 sm:py-12 w-full border-t-2 border-gray-500"
//       style={{ borderTop: "1px solid rgba(255, 255, 255, 0.35)" }}
//     >
//       <div className="container max-w-7xl flex flex-row flex-wrap gap-96 px-4 md:px-6 text-white">
//         <div className="flex items-start gap-4 flex-grow">
//           <div className="flex items-center gap-4">
//             <Link href="#" aria-label="Twitter" prefetch={false}>
//               <FaTwitterSquare className="h-5 w-5 text-muted-foreground hover:text-indigo-500 transition-colors" />
//             </Link>
//             <Link href="#" aria-label="LinkedIn" prefetch={false}>
//               <FaLinkedinIn className="h-5 w-5 text-muted-foreground hover:text-indigo-500 transition-colors" />
//             </Link>
//             <Link href="#" aria-label="Instagram" prefetch={false}>
//               <FaInstagram className="h-5 w-5 text-muted-foreground hover:text-indigo-500 transition-colors" />
//             </Link>
//           </div>
//         </div>
//         <div className="links-container flex-grow flex flex-row flex-wrap gap-20">
//           <div className="flex flex-col">
//             {/* <h4 className="text-sm font-medium text-foreground">Company</h4> */}

//             <nav>
//               <ul>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#Hero"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#About"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#Features"
//                   >
//                     Features
//                   </a>
//                 </li>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#Benefits"
//                   >
//                     Benefits
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="flex flex-col">
//             {/* <h4 className="text-sm font-medium text-foreground">Support</h4> */}
//             <nav>
//               <ul>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#Work"
//                   >
//                     Working
//                   </a>
//                 </li>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#Video"
//                   >
//                     Demo
//                   </a>
//                 </li>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#Reviews"
//                   >
//                     Reviews
//                   </a>
//                 </li>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#Pricing"
//                   >
//                     Pricing
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           <div className="flex flex-col ">
//             {/* <h4 className="text-sm font-medium text-foreground">Support</h4> */}
//             <nav>
//               <ul>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#FAQ"
//                   >
//                     FAQ's
//                   </a>
//                 </li>
//                 <li smooth={true} duration={500}>
//                   <a
//                     className="text-sm text-muted-foreground hover:underline"
//                     href="#Contact"
//                   >
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>

//       <div
//         className="container max-w-7xl px-4 md:px-6 mt-8 text-center text-sm text-muted-foreground text-white border-t-2 border-gray-500"
//         style={{ borderTop: "1px solid rgba(255, 255, 255, 0.35)" }}
//       >
//         &copy; 2024 ITBCO Solutions Private Limited. All rights reserved.
//       </div>
//     </footer>
//   );
// }
