import React from "react";
import footerlogo from "../images/food-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="max-w-[1200ox] mx-auto">
          <div className="grid md:grid-cols-3 px-6 py-5">
            <div className="py-8 px-8">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                {" "}
                <img src={footerlogo} alt="" className="max-w-[50px]" /> FOODIE
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                voluptas recusandae ullam quibusdam culpa dolorem voluptatum
                iure unde porro asperiores.
              </p>
              <br />
              <div className="flex items-center gap-3 mt-6">
                <FaLocationArrow />
                <p>Karachi, Sindh Pakistan </p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+92-3341243782</p>
              </div>
            {/* social media links */}
            <div>
                <div className="flex items-center gap-3 mt-6">
                    <a href=""><FaFacebook className="text-3xl"/></a>       
                    <a href=""><FaInstagram className="text-3xl"/></a>
                    <a href="#"><FaLinkedin className="text-3xl"/></a>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mv-3">Important Links</h1>
                        <ul className="flex flex-col gap-3 py-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mv-3">Important Links</h1>
                        <ul className="flex flex-col gap-3 py-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mv-3">Important Links</h1>
                        <ul className="flex flex-col gap-3 py-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
                @copyright 2024 All rights reserved || Made by Sheikh Sameer
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
