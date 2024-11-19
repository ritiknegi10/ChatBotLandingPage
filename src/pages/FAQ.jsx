import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import img from "../assets/images/noCode.jpeg";
import { Button } from "react-scroll";
import { ContactUs } from "./ContactUs";
import Modal from "../components/modal/Modal";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-dark-gray rounded-lg my-2 ">
    <div
      className="flex justify-between items-center p-4 cursor-pointer"
      onClick={onClick}
    >
      <Typography
        variant="h6"
        style={{ fontSize: 20 }}
        className="text-white text-xl"
      >
        {question}
      </Typography>
      {isOpen ? (
        <IoIosArrowDropup className="text-white text-2xl" />
      ) : (
        <IoIosArrowDropdown className="text-white text-2xl" />
      )}
    </div>
    {isOpen && (
      <div className="bg-dark-blue p-4 rounded-b-lg">
        <Typography
          variant="body2"
          style={{ fontSize: 20 }}
          className="text-white"
        >
          {answer}
        </Typography>
      </div>
    )}
  </div>
);
const FAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqItems = [
    {
      question:
        "How do I get started with creating a chatbot on your platform?",
      answer:
        " Getting started is easy! Simply sign up for an account on our website, choose a template that suits your needs, and follow our step-by-step guide to customize your chatbot. No coding skills are required!.",
    },
    {
      question: "What types of chatbots can I create using your platform?",
      answer:
        "Our platform supports the creation of various types of chatbots, including customer support bots, sales and marketing bots, appointment scheduling bots, and more. You can tailor your chatbot to fit any industry or use case.",
    },
    {
      question: "Do I need any programming skills to build a chatbot?",
      answer:
        " No, you don’t need any programming skills to build a chatbot with our platform. Our user-friendly interface and drag-and-drop builder make it easy for anyone to create and customize a chatbot.",
    },
    {
      question: "Can I integrate my chatbot with other tools and platforms?",
      answer:
        "Yes, our platform allows you to integrate your chatbot with various tools and platforms such as CRM systems, social media channels, email marketing services, and more. This ensures seamless communication and enhanced functionality.",
    },
    {
      question: "Is there a limit to the number of chatbots I can create?",
      answer:
        "The number of chatbots you can create depends on the subscription plan you choose. Our basic plan allows for a limited number of chatbots, while our premium plans offer the ability to create an unlimited number of chatbots. Check our pricing page for more details.",
    },
  ];
  return (
    <section className="bg-dark-gray min-h-screen pt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Typography
          variant="h3"
          className="text-center mb-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400"
        >
          FAQs
        </Typography>
        <Typography
          variant="h6"
          className="mt-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white mb-5"
        >
          Answers to Frequently Asked Questions
        </Typography>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    // <div>
    //   <section id="faq" className="p-10 text-center text-white ">
    //     <div className="container mx-auto flex flex-col bg-gray-800 items-center justify-center m-5 p-3 shadow-lg rounded-lg">
    //       <div className="flex justify-center">
    //         <div className="w-2/3">
    //           <div className="faq-content">
    //             <h2 className="text-xl font-bold">
    //               Frequently Asked Questions
    //             </h2>
    //             <p className="mt-4 text-lg">
    //               Find answers to common questions about our AI Chatbot.
    //             </p>

    //             <div className="mt-8 text-left">
    //               <div className="faq-item">
    //                 <h4 className="text-xl font-bold cursor-pointer">
    //                   Question 1
    //                   <span className="text-base font-normal">
    //                     Click to expand
    //                   </span>
    //                 </h4>
    //                 <p className="mt-2 text-lg hidden">Answer to question 1.</p>
    //               </div>

    //               {/* ... other FAQ items ... */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div div className="py-12" id="FAQ">
      <div className="text-center">
        <h2 className="font-bold text-4xl">
          <span className="text-indigo-500">FAQs</span>
        </h2>
        <p className="mt-3 text-white">
          Have questions? We've got answers. Find out more about our service.
        </p>
      </div>
      <section className="container max-w-6xl px-4  md:py-20 grid md:grid-cols-2 gap-12">
        <div className="grid gap-6">
          <Card style={{ borderRadius: 24 }}>
            <div className="">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="px-4 pt-4"
              >
                Frequently Asked Questions
              </Typography>
              <Typography
                gutterBottom
                variant=""
                component="div"
                className="px-5 pb-5"
              >
                Get answers to the most common questions about our product.{" "}
              </Typography>
            </div>
            <CardContent>
              <Accordion>
                {/* <AccordionItem value="what-is-it"> */}
                <AccordionSummary className="text-base font-medium p-8 bg-black ">
                  <div className=" flex justify-between w-full">
                    <div className=""> What is this product?</div>

                    <span className="  text-4xl	 ">
                      <IoIosArrowDropdown />
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-sm text-muted-foreground">
                    This is a revolutionary new product that solves a common
                    problem in a unique way. It's designed to make your life
                    easier and more efficient.
                  </p>
                </AccordionDetails>
                {/* </AccordionItem> */}
              </Accordion>

              <Accordion type="single" collapsible>
                {/* <AccordionItem value="how-does-it-work"> */}
                <AccordionSummary className="text-base font-medium">
                  <div className=" flex justify-between w-full">
                    <div className=""> What is this product?</div>

                    <span className="  text-4xl	 ">
                      <IoIosArrowDropdown />
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-sm text-muted-foreground">
                    The product uses advanced technology to automatically detect
                    and respond to your needs. It's simple to set up and easy to
                    use, with intuitive controls and a user-friendly interface.
                  </p>
                </AccordionDetails>
                {/* </AccordionItem> */}
                {/* <AccordionItem value="is-it-safe"> */}
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionSummary className="text-base font-medium">
                  <div className=" flex justify-between w-full">
                    <div className=""> What is this product?</div>

                    <span className="  text-4xl	 ">
                      <IoIosArrowDropdown />
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Safety is our top priority. This product has
                    been rigorously tested and certified to meet the highest
                    safety standards. You can use it with confidence, knowing
                    that it's designed to protect you and your family.
                  </p>
                </AccordionDetails>
              </Accordion>
              {/* </AccordionItem> */}
              {/* <AccordionItem value="what-is-the-cost"> */}
              <Accordion type="single" collapsible>
                <AccordionSummary className="text-base font-medium">
                  <div className=" flex justify-between w-full">
                    <div className=""> What is this product?</div>

                    <span className="  text-4xl	 ">
                      <IoIosArrowDropdown />
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="text-sm text-muted-foreground">
                    The product is priced competitively, with a range of options
                    to fit your budget. You can check our website for the latest
                    pricing information and any available discounts or
                    promotions.
                  </p>
                </AccordionDetails>
                {/* </AccordionItem> */}
              </Accordion>
            </CardContent>
          </Card>
        </div>
        <div className="relative">
          <img
            src={img}
            alt="FAQ Image"
            width={400}
            height={600}
            className="rounded-lg object-cover w-full aspect-[3/2] "
          />
        </div>
      </section>

      <div className="flex justify-center items-center ">
        <Card
          id="Contact"
          className="w-1/2 flex flex-col justify-center p-8"
          style={{ borderRadius: 8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Have more questions?</h2>
          <p className="text-muted-foreground mb-6">
            Check out our comprehensive FAQs or reach out to our support team.
          </p>
          <div id="">
            <div className="flex justify-center">
              <button onClick={openModal} className="text-white bg-black">
                Contact Us
              </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <ContactUs />
            </Modal>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
