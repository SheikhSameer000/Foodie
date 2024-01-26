import React from "react";
import img2 from "../images/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: img2,
    name: "Briyani",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta dolores consequuntur.",
  },
  {
    id: 2,
    img: img2,
    name: "Karahi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta dolores consequuntur.",
  },
  {
    id: 3,
    img: img2,
    name: "Daal Chawal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta dolores consequuntur.",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-20 max-x-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-bold">
              Our Services
            </p>
            <h1 className="text-3xl font-bold ">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              eveniet quasi odio dolorum iusto, impedit rerum maiores magnam
              ullam similique delectus consectetur obcaecati a nam voluptate
            </p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 place-items-center">
            {ServicesData.map(({ id, img, name, description }) => {
              return (
                <div
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-once="ture"
                  key={id}
                  className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white duration-300 shadow-xl"
                >
                  <div className="h-[100px] ">
                    <img
                      src={img}
                      alt=""
                      className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-500 text-sm line-clamp-2 group-hover:text-white duration-300">
                      {description}
                    </p>
                  </div>  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
