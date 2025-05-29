"use client";
import Image from "next/image";
import BannerImage from "../../../public/images/servicesBanner.jpg";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import ContactImage from "../../../public/images/contactUs.jpeg";

export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-white absolute top-0 left-0 text-black overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, filter: "blur(2px)" }}
        animate={{ scale: 1, filter: "blur(0)" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="banner w-full h-[45vh] relative"
      >
        <Image
          src={BannerImage}
          alt="Services Page Banner"
          fill
          className="object-cover bg-purple-400 w-full"
        />
        <div className="bg-[#2b0b1d] opacity-70 absolute top-0 left-0 w-full h-full"></div>
        <div className="bannerContent absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
              className="text-6xl font-extrabold text-white max-sm:text-4xl"
            >
              About Us
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
                delay: 0.1,
              }}
              className="text-3xl font-medium text-white mt-5 max-sm:text-[18px] ax-sm:px-2.5 max-sm:text-center max-sm:px-8"
            >
              {"We'd love to hear from you. Get in touch with our team."}
            </motion.h3>
          </div>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-5 gap-8 md:px-20 px-10 py-10">
        <div className="md:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin h-6 w-6 text-indigo-600 mt-1"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <h3 className="font-medium text-lg">Corporate Head Office</h3>
                <p className="text-slate-600 mt-1">
                  200 Centennial Ave Suite #206 Piscataway, NJ 08854
                </p>
                <h3 className="font-medium text-lg mt-4">
                  West Coast Regional Office
                </h3>
                <p className="text-slate-600 mt-1">
                  5201 Great America Pkwy Suite #320 Santa Clara, CA 95054
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{ clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
            transition={{
              duration: 0.8,
              type: "tween",
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="bg-white p-6 rounded-lg shadow-sm relative"
          >
            <Image
              fill
              src={ContactImage}
              alt="Office"
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="flex items-start space-x-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail h-6 w-6 text-indigo-600 mt-1"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <div>
                <h3 className="font-medium text-lg">Email Us</h3>
                <p className="text-slate-600 mt-1">info@saktra.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone h-6 w-6 text-indigo-600 mt-1"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <h3 className="font-medium text-lg">Call Us</h3>
                <p className="text-slate-600 mt-1">+1 (732) 361-4246</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="md:col-span-3">
          <form className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-gray-200 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="name"
                  name="name"
                  // value=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-gray-200 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="email"
                  name="email"
                  // value=""
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-gray-200 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="subject"
                  name="subject"
                  required={true}
                  // value=""
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-gray-200 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  id="message"
                  name="message"
                  rows={6}
                  required={true}
                ></textarea>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-gray-800 text-white text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
