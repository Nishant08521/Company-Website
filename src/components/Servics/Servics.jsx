import React from "react";
import { motion } from "framer-motion";
const Servics = () => {
  return (
    <section id="services" className="py-20 bg-[#f6f9fb]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-4 h-1 bg-[#7d6fd2] rounded-full"></span>
            <span className="uppercase text-xs font-bold text-[#7d6fd2] tracking-widest">
              What We Do
            </span>
            <span className="inline-block w-4 h-1 bg-[#7d6fd2] rounded-full"></span>
          </div>
          <h2 className="font-extrabold text-2xl md:text-3xl text-[#2d285d]">
            We Offer Top-Notch Services
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {/* Web Development Card */}
          <div
            div
            className="bg-white rounded-2xl shadow-md border border-[#ece8fc] p-8 flex flex-col gap-5 items-center hover:shadow-xl transition"
          >
            <img
              src="https://ext.same-assets.com/3139707680/557611040.svg"
              alt="Web Development Icon"
              className="w-14 h-14"
            />
            <h3 className="font-bold text-lg">Web Development</h3>
            <p className="text-[#7d7b9b] text-sm text-align: left">
              Creating Innovative Business Solutions & Modern Websites.
            </p>
            <a
              href="#service-web-dev"
              className="inline-flex items-center text-[#6c63ff] font-bold hover:underline text-sm mt-2 gap-1 text-align:left"
            >
              Read More
              <img
                src="https://ext.same-assets.com/3139707680/2067545548.svg"
                alt="arrow"
                className="w-4 h-4"
              />
            </a>
          </div>
          {/* UX/UI Design Card */}
          <div className="bg-white rounded-2xl shadow-md border border-[#ece8fc] p-8 flex flex-col gap-5 items-center hover:shadow-xl transition">
            <img
              src="https://ext.same-assets.com/3139707680/2230765661.svg"
              alt="UX/UI Design Icon"
              className="w-14 h-14"
            />
            <h3 className="font-bold text-lg">UX/UI Design</h3>
            <p className="text-[#7d7b9b] text-sm text-center">
              Designing Intuitive and Engaging Interfaces for Seamless User
              Experiences.
            </p>
            <a
              href="#service-ux-ui"
              className="inline-flex items-center text-[#6c63ff] font-bold hover:underline text-sm mt-2 gap-1"
            >
              Read More
              <img
                src="https://ext.same-assets.com/3139707680/2067545548.svg"
                alt="arrow"
                className="w-4 h-4"
              />
            </a>
          </div>
          {/* App Development Card */}
          <div className="bg-white rounded-2xl shadow-md border border-[#ece8fc] p-8 flex flex-col gap-5 items-center hover:shadow-xl transition">
            <img
              src="https://ext.same-assets.com/3139707680/2004128252.svg"
              alt="App Development Icon"
              className="w-14 h-14"
            />
            <h3 className="font-bold text-lg">App Development</h3>
            <p className="text-[#7d7b9b] text-sm text-center">
              Custom Mobile App Solutions for Business Growth.
            </p>
            <a
              href="#service-app-dev"
              className="inline-flex items-center text-[#6c63ff] font-bold hover:underline text-sm mt-2 gap-1"
            >
              Read More
              <img
                src="https://ext.same-assets.com/3139707680/2067545548.svg"
                alt="arrow"
                className="w-4 h-4"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servics;
