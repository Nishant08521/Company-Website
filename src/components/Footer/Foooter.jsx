import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Foooter = () => {
  return (
    <footer className="bg-[#0A0B13] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Company */}
        <div>
          <h3 className="text-xl font-bold mb-4 relative inline-block">
            ABOUT COMPANY
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500"></span>
            <span className="absolute bottom-0 left-[100%] ml-1 w-2 h-2 rounded-full bg-violet-500"></span>
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: "facebook", link: "https://facebook.com" },
              { icon: "instagram", link: "https://instagram.com" },
              { icon: "twitter", link: "https://twitter.com" },
              { icon: "linkedin", link: "https://linkedin.com" },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-violet-500 transition"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 relative inline-block">
            QUICK LINKS
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500"></span>
            <span className="absolute bottom-0 left-[100%] ml-1 w-2 h-2 rounded-full bg-violet-500"></span>
          </h3>
          <ul className="space-y-2">
            {[
              { label: "About", link: "/us" },
              { label: "Team", link: "#Team" },
              { label: "Careers", link: "/careers" },
              { label: "Contact", link: "/contactus" },
              { label: "Services", link: "#services" },
            ].map(({ label, link }, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span>›</span>
                <a href={link} className="hover:text-violet-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-bold mb-4 relative inline-block">
            OUR SERVICES
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500"></span>
            <span className="absolute bottom-0 left-[100%] ml-1 w-2 h-2 rounded-full bg-violet-500"></span>
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Web development", link: "#services" },
              { label: "UX/UI design", link: "#services" },
              { label: "App development", link: "#services" },
              { label: "SEO Expert", link: "#services" },
            ].map(({ label, link }, i) => (
              <li key={i} className="flex items-center space-x-2 ">
                <span>›</span>
                <a href={link} className="hover:text-violet-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 relative inline-block">
            CONTACT US
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500"></span>
            <span className="absolute bottom-0 left-[100%] ml-1 w-2 h-2 rounded-full bg-violet-500"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex space-x-4 items-center">
              <div className="bg-violet-500 p-3 rounded-lg">
                <i className="fas fa-phone text-white"></i>
              </div>
              <div>
                <p className="text-xs text-gray-400">PHONE NUMBER</p>
                <a
                  href="tel:+880000000000"
                  className="font-bold hover:text-violet-400"
                >
                  +91 000 000 000
                </a>
              </div>
            </li>
            <li className="flex space-x-4 items-center">
              <div className="bg-violet-500 p-3 rounded-lg ">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <div>
                <p className="text-xs text-gray-400">EMAIL ADDRESS</p>
                <a
                  href="mailto:info@gmail.com"
                  className="font-bold hover:text-violet-400"
                >
                  info@gmail.com
                </a>
              </div>
            </li>
            <li className="flex space-x-4 items-center">
              <div className="bg-violet-500 p-3 rounded-lg">
                <i className="fas fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <p className="text-xs text-gray-400">OFFICE LOCATION</p>
                <a
                  href="https://www.google.com/maps/place/Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-violet-400"
                >
                  Noida, New Delhi
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>
          © 2025{" "}
          <a href="/" className="text-violet-500 hover:underline">
            Company
          </a>{" "}
          All rights reserved.
        </p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="/terms" className="hover:text-white">
            Terms & Condition
          </a>
          <span>|</span>
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;
