import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your logo assets
import download1 from "../../assets/download1.png";
import download2 from "../../assets/download2.png";
import download3 from "../../assets/download3.png";
import download4 from "../../assets/download4.png";
import download5 from "../../assets/download5.png";
import download6 from "../../assets/download6.png";

const logos = [
  { src: download1 },
  { src: download2 },
  { src: download3 },
  { src: download4 },
  { src: download5 },
  { src: download6 },
  { src: download1 },
  { src: download4 },
];

const OurClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 text-violet-600 font-semibold text-lg">
          <div className="w-6 h-6 border-2 border-violet-500 flex items-center justify-center rounded-md">
            <div className="w-2 h-2 bg-violet-500 rounded"></div>
          </div>
          <span>OUR CLIENTS</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <div key={idx} className="px-4">
              <div className="flex flex-col items-center text-center">
                <img
                  src={logo.src}
                  alt={`Client ${idx + 1}`}
                  className="h-16 mb-2 mx-auto"
                />
                {/* <p className="text-sm text-gray-500">{logo.caption}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurClients;
