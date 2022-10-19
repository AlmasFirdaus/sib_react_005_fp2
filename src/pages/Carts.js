import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronRightIcon, HomeIcon } from "../assets/icons/icon-svg/iconSvg";

const Carts = () => {
  const { products, carts } = useSelector((store) => store.product);
  console.log("🚀 ~ file: Carts.js ~ line 8 ~ Carts ~ carts", carts);

  //   const product = products ? products.filter((product, index) => product.id === Number(carts.map((cart) => cart.id))) : "";
  const product = carts.filter((cart) => products.filter((item) => item.id === Number(cart.id)));
  console.log(product);
  return (
    <section className="pt-16 pb-28 font-quicksand">
      <div
        className="w-full h-96 bg-fixed overflow-hidden flex justify-center items-center text-center relative"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1586979816990-1819efcad0de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)` }}
      >
        <div className="w-full h-full bg-slate-400 mix-blend-multiply"></div>
        <div className="absolute flex flex-col justify-center items-center text-white">
          <h1 className="text-white text-4xl font-semibold">Cart</h1>
          <div className="py-2 flex flex-wrap justify-evenly items-center capitalize">
            <HomeIcon />
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-medium text-lg text-white transition ease-in-out duration-200 hover:text-secondary">
              Home
            </Link>
            <ChevronRightIcon />
            <h3 className="font-medium text-lg text-white">Cart</h3>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </section>
  );
};

export default Carts;
