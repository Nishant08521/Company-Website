import React from "react";
import { motion } from "framer-motion";
import Chatbot from "../Chatbot/Chatbot";

const Hero = () => {
  return (
    <section className="relative min-h-[540px] flex items-center bg-gradient-to-br from-[#ece8fc] via-[#f6f9fb] to-[#e7e0fa] pt-32 px-6 md:px-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl space-y-5"
        >
          <div className="uppercase text-xs font-semibold text-[#7d6fd2]">
            Secure & IT Services
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl text-[#2d285d] leading-tight">
            Empowering Businesses
            <br />
            <span className="text-[#6c63ff]">Through Technology</span>
          </h1>
          <p className="text-[#756b99] max-w-md pt-1">
            Stard is a premier web agency committed to empowering businesses by
            strategically implementing technology. Our passion lies in helping
            our clients reach their objectives.
          </p>
          <a
            href="/contactus"
            className="inline-block mt-2 px-6 py-3 text-sm font-semibold rounded-xl bg-[#6c63ff] text-white shadow-md hover:bg-[#4737a7] transition"
          >
            {/* hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition */}
            Contact Us →
          </a>
        </motion.div>
        {/* Right illustration */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center items-center relative"
        >
          <img
            src="https://ext.same-assets.com/3139707680/1930203033.png"
            alt="Hero Shape"
            className="absolute right-0 top-0 w-[300px] md:w-[370px] z-0 rounded-full"
            style={{ filter: "drop-shadow(0 2px 24px rgba(44,40,93,0.08))" }}
          />
          <img
            src="https://ext.same-assets.com/3139707680/2214627728.webp"
            alt="Team Collaboration"
            className="relative z-10 w-[260px] md:w-[410px] rounded-full shadow-xl  border-4 border-white"
          />
        </motion.div>
      </div>
      <Chatbot />
    </section>
  );
};

export default Hero;
