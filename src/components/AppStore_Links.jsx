import React from "react";
import AppstoreImg from "../images/app_store.png";
import PlaystoreImg from "../images/play_store.png";
import Gif from "../images/mobile_bike.gif";

const AppStore_Links = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="space-y-6 max-w-xl mx-auto">
              <h1
                data-aos="fade-up"
                data-aos-duration="400"
                className="text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700"
              >
                Foodly is Available for Android and IOS
              </h1>
              <div className=" flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                  data-aos="fade-up"
                  data-aos-duration="400"
                    src={PlaystoreImg}
                    alt="PlayStore"
                    className="max-w-[150px] sm:max-w-[160px] md:max-w-[200]"
                  />
                </a>
                <a href="#">
                  <img
                  data-aos="fade-up"
                  data-aos-duration="400"
                    src={AppstoreImg}
                    alt="Appstore"
                    className="max-w-[150px] sm:max-w-[160px] md:max-w-[200]"
                  />
                </a>
              </div>
            </div>
            <div>
              <img data-aos="zoom-in"
                data-aos-duration="400" src={Gif} alt="" className="maax-w-[300px] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore_Links;
