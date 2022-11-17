import React from "react";

const CardAbout = ({ image, title, position, code }) => {
  return (
    <div className="group flex">
      <div className="w-full mb-10 bg-white rounded-none shadow-md overflow-hidden relative flex flex-col transition ease-in-out duration-500 group-hover:scale-105 group-hover:shadow-xl ">
        <div className="">
          <div className=" flex flex-wrap justify-center items-center text-center">
            <img src={image} alt="" className="object-scale-down my-4 w-full h-44 md:h-[12rem]" />
          </div>
        </div>
        <div className="flex flex-1 justify-center text-center">
          <h1 className="w-full lg:w-2/3 font-bold text-primary text-2xl mb-3 transition duration-200 hover:text-secondary">{title}</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center text-center">
          <h2 className="w-full font-semibold text-primary text-lg my-2 transition duration-300 hover:text-secondary capitalize">{position}</h2>
          <h2 className="font-semibold text-secondary text-xl mb-4">RCTN-KS05-{code}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
