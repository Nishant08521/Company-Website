import React from "react";

const Counter = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#6c63ff] via-[#7d6fd2] to-[#4737a7] py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {/* Counter 1 */}
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/530120/plan-list.svg"
              alt="Finish Project"
              className="w-15 h-15 mb-1"
            />
            <span className="font-extrabold text-2xl md:text-4xl">86+</span>
            <span className="text-sm md:text-base opacity-80">
              Finish Project
            </span>
          </div>
          {/* Counter 2 */}
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/502411/client.svg"
              alt="Happy Client"
              className="w-15 h-15 mb-1"
            />
            <span className="font-extrabold text-2xl md:text-3xl">198+</span>
            <span className="text-sm md:text-base opacity-80">
              Happy Client
            </span>
          </div>
          {/* Counter 3 */}
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/228337/skill.svg"
              alt="Skills Expert"
              className="w-15 h-15 mb-1"
            />
            <span className="font-extrabold text-2xl md:text-3xl">147+</span>
            <span className="text-sm md:text-base opacity-80">
              Skills Expert
            </span>
          </div>
          {/* Counter 4 */}
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/263149/badge-medal.svg"
              alt="Awards"
              className="w-15 h-15 mb-1"
            />
            <span className="font-extrabold text-2xl md:text-3xl">
              4.8 <span className="text-base font-bold align-top">★</span>
            </span>
            <span className="text-sm md:text-base opacity-80">Ratings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
