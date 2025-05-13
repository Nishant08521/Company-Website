// import React from "react";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Team = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };
//   return (
//     <Slider {...settings}>
//       <div class="py-12 bg-white text-center">
//         <h3 class="text-indigo-600 font-semibold uppercase tracking-wide text-sm">
//           Great Team
//         </h3>
//         <h2 class="text-3xl md:text-4xl font-bold mb-10">
//           See Our Skilled <span class="text-indigo-600">Expert</span>{" "}
//           <span class="text-purple-500">Team</span>
//         </h2>

//         {/* <!-- Scrollable Wrapper --> */}
//         <div class="relative px-4">
//           <div class="flex overflow-x-auto space-x-8 scrollbar-hide scroll-smooth snap-x">
//             {/* <!-- Team Card --> */}
//             <div class="relative min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden snap-start group">
//               {/* <img src="https://via.placeholder.com/300x300" class="w-full h-[300px] object-cover" alt="Team Member"> */}
//               <img
//                 src="https://stard.vercel.app/assets/team_3-D3vKdgLX.jpg"
//                 alt=""
//                 class="w-full h-[300px] object-cover"
//               />
//               <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
//                 <div class="bg-white p-3 rounded-full shadow-lg flex gap-4">
//                   <i class="fab fa-facebook-f text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-twitter text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-linkedin-in text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-instagram text-black hover:text-indigo-500"></i>
//                 </div>
//               </div>
//               <div class="p-4 bg-white rounded-b-2xl">
//                 <h4 class="font-bold text-lg">Brad Pitt</h4>
//                 <p class="text-indigo-600 text-sm">Chief Expert</p>
//               </div>
//             </div>

//             {/* <!-- Repeat 5 More Cards --> */}
//             <div class="relative min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden snap-start group">
//               {/* <img src="https://via.placeholder.com/300x300" class="w-full h-[300px] object-cover" alt="Team Member"> */}
//               <img
//                 src="https://stard.vercel.app/assets/team_3-D3vKdgLX.jpg"
//                 alt=""
//                 class="w-full h-[300px] object-cover"
//               />
//               <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
//                 <div class="bg-white p-3 rounded-full shadow-lg flex gap-4">
//                   <i class="fab fa-facebook-f text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-twitter text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-linkedin-in text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-instagram text-black hover:text-indigo-500"></i>
//                 </div>
//               </div>
//               <div class="p-4 bg-indigo-600 text-white rounded-b-2xl">
//                 <h4 class="font-bold text-lg">Md. Anamul Hasan</h4>
//                 <p class="text-sm">Frontend Developer</p>
//               </div>
//             </div>

//             <div class="relative min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden snap-start group">
//               {/* <img src="https://via.placeholder.com/300x300" class="w-full h-[300px] object-cover" alt="Team Member"> */}
//               <img
//                 src="https://stard.vercel.app/assets/team_3-D3vKdgLX.jpg"
//                 alt=""
//                 class="w-full h-[300px] object-cover"
//               />
//               <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
//                 <div class="bg-white p-3 rounded-full shadow-lg flex gap-4">
//                   <i class="fab fa-facebook-f text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-twitter text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-linkedin-in text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-instagram text-black hover:text-indigo-500"></i>
//                 </div>
//               </div>
//               <div class="p-4 bg-white rounded-b-2xl">
//                 <h4 class="font-bold text-lg">Anamul Hasan</h4>
//                 <p class="text-indigo-600 text-sm">CEO & Founder</p>
//               </div>
//             </div>

//             <div class="relative min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden snap-start group">
//               {/* <img src="https://via.placeholder.com/300x300" class="w-full h-[300px] object-cover" alt="Team Member"> */}
//               <img
//                 src="https://stard.vercel.app/assets/team_3-D3vKdgLX.jpg"
//                 alt=""
//                 class="w-full h-[300px] object-cover"
//               />
//               <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
//                 <div class="bg-white p-3 rounded-full shadow-lg flex gap-4">
//                   <i class="fab fa-facebook-f text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-twitter text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-linkedin-in text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-instagram text-black hover:text-indigo-500"></i>
//                 </div>
//               </div>
//               <div class="p-4 bg-white rounded-b-2xl">
//                 <h4 class="font-bold text-lg">Jane Smith</h4>
//                 <p class="text-indigo-600 text-sm">Marketing Lead</p>
//               </div>
//             </div>

//             <div class="relative min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden snap-start group">
//               {/* <img src="https://via.placeholder.com/300x300" class="w-full h-[300px] object-cover" alt="Team Member"> */}
//               <img
//                 src="https://stard.vercel.app/assets/team_3-D3vKdgLX.jpg"
//                 alt=""
//                 class="w-full h-[300px] object-cover"
//               />
//               <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
//                 <div class="bg-white p-3 rounded-full shadow-lg flex gap-4">
//                   <i class="fab fa-facebook-f text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-twitter text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-linkedin-in text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-instagram text-black hover:text-indigo-500"></i>
//                 </div>
//               </div>
//               <div class="p-4 bg-white rounded-b-2xl">
//                 <h4 class="font-bold text-lg">Samuel Lee</h4>
//                 <p class="text-indigo-600 text-sm">Project Manager</p>
//               </div>
//             </div>

//             <div class="relative min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden snap-start group">
//               {/* <img src="https://via.placeholder.com/300x300" class="w-full h-[300px] object-cover" alt="Team Member">
//                */}
//               <img
//                 src="https://stard.vercel.app/assets/team_3-D3vKdgLX.jpg"
//                 alt=""
//                 class="w-full h-[300px] object-cover"
//               />
//               <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
//                 <div class="bg-white p-3 rounded-full shadow-lg flex gap-4">
//                   <i class="fab fa-facebook-f text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-twitter text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-linkedin-in text-black hover:text-indigo-500"></i>
//                   <i class="fab fa-instagram text-black hover:text-indigo-500"></i>
//                 </div>
//               </div>
//               <div class="p-4 bg-white rounded-b-2xl">
//                 <h4 class="font-bold text-lg">Alex Kim</h4>
//                 <p class="text-indigo-600 text-sm">Designer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Slider>
//   );
// };

// export default Team;

// src/components/Team/TeamSlider.jsx

import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Brad Pitt",
    title: "Chief expert",
    image: profile2,
  },
  {
    name: "Nishant kumar",
    title: "Frontend Developer",
    image: profile1,
  },
  {
    name: "Clay",
    title: "CEO & Founder",
    image: profile2,
  },
  {
    name: "Ankit",
    title: "Chief expert",
    image: profile1,
  },
  {
    name: "Rishi",
    title: "Frontend Developer",
    image: profile2,
  },
  {
    name: "Rohan",
    title: "CEO & Founder",
    image: profile2,
  },
];

const Arrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 z-10 -translate-y-1/2 bg-violet-500 text-white p-3 rounded-full shadow-md hover:bg-violet-600 ${
      direction === "left" ? "left-2" : "right-2"
    }`}
  >
    {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
  </button>
);

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2100,
    cssEase: "linear",
    arrows: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id="Team" className="py-12 bg-white text-center">
      <h4 className="text-violet-600 font-semibold text-sm uppercase">
        Great Team
      </h4>
      <h2 className="text-3xl font-bold mb-8">
        See Our Skilled Expert <span className="text-violet-500">Team</span>
      </h2>

      <div className="relative px-4">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4 ">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md relative m-12 ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-2xl "
                />

                {member.featured ? (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-60 bg-white p-4 rounded-xl shadow-lg text-center">
                    <div className="bg-violet-600 text-white rounded-md py-2 ">
                      <h4 className="font-bold">{member.name}</h4>
                      <p className="text-sm">{member.title}</p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 bg-white text-center py-3 rounded-xl shadow-md">
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-sm text-violet-600">{member.title}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
