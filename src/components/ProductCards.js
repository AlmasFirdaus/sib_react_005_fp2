// import axios frosm "axios";
import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/icons/cart-whitefill-2.png";
import heartIcon from "../assets/icons/heart.png";
import searchIcon from "../assets/icons/search-plus.svg";

const ProductCards = ({ item, index }) => {
  let { id, title, price, category, image } = item;
  const slug = category.replace(" ", "-");
  return (
    <div className="group flex">
      <div className="w-full px-6 py-7 mb-10 bg-slate-50 rounded-none shadow-md overflow-hidden relative flex flex-col transition ease-in-out duration-500 group-hover:scale-105 group-hover:shadow-xl ">
        <div className="p-2 border z-10 flex justify-end absolute h-28 w-28 -top-20 -left-[10rem] bg-secondary transition ease-in-out duration-700 origin-bottom-right rotate-45 group-hover:translate-x-10 group-hover:translate-y-10 ">
          <button>
            <img src={cartIcon} alt="" className="w-5 -rotate-45 self-center" />
          </button>
        </div>
        <div className="absolute h-full z-10 flex flex-col justify-center -right-10">
          <div className="flex flex-col h-1/4 justify-evenly">
            <button className="w-10 h-10 bg-slate-200 opacity-50 shadow-md rounded-full flex justify-center items-center transition delay-100 duration-300 ease-in-out hover:bg-blueButton hover:opacity-100 group-hover:-translate-x-12">
              <img src={heartIcon} alt="" className="w-5" />
            </button>
            <button className="w-10 h-10 bg-slate-200 opacity-50 shadow-md rounded-full flex justify-center items-center transition delay-200 duration-300 ease-in-out hover:bg-blueButton hover:opacity-100 group-hover:-translate-x-12">
              <img src={searchIcon} alt="" className="w-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center text-center">
          <Link to={`/products/${id}`} onClick={() => window.scrollTo(0, 0)} className="w-full lg:w-2/3 font-bold text-primary text-2xl mb-3 transition duration-300 hover:text-secondary">
            {title}
          </Link>
        </div>
        <div className="flex-1">
          <div className=" flex flex-wrap justify-center items-center text-center">
            <Link to={`/products/${id}`} onClick={() => window.scrollTo(0, 0)}>
              <img src={image} alt="" className="object-scale-down my-4 w-full h-44 md:h-[12rem]" />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center text-center">
          <Link to={`/${slug}`} onClick={() => window.scrollTo(0, 792)} className="w-full font-medium text-primary text-lg my-2 transition duration-300 hover:text-secondary">
            {category}
          </Link>
          <h2 className="font-semibold text-secondary text-xl mb-4">${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
