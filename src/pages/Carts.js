import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronRightIcon, HomeIcon } from "../assets/icons/icon-svg/iconSvg";
import CartProduct from "../components/CartProduct";

const Carts = () => {
  let { carts, total } = useSelector((store) => store.product);
  console.log("🚀 ~ file: Carts.js ~ line 9 ~ Carts ~ carts", carts);
  return (
    <section className="pt-16 pb-28 font-quicksand bg-white">
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
      <div className="container px-8 lg:px-20 pt-14 pb-28">
        {carts ? (
          <div className="flex">
            <div className="w-full lg:w-2/3">
              <table>
                <thead>
                  <tr className="[&>th]:text-start [&>th]:text-primary [&>th]:py-5 [&>th]:pr-20 ">
                    <th>Product</th>
                    <th></th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => {
                    return <CartProduct product={item} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
            <div className="w-full max-h-[20rem] ml-10 lg:w-1/3 bg-slate-100 shadow-sm rounded-xl">
              <div className="w-full min-h-[30rem] px-8 py-10">
                <div className="w-full border-b-2">
                  <h1 className="font-bold text-xl text-primary py-5 capitalize">Order Summary</h1>
                </div>
                <div className="w-full border-b-2 py-5">
                  <div className="flex items-center font-semibold text-lg">
                    <h2 className="w-1/2 tracking-wide text-slate-500">Total</h2>
                    <h2 className="w-1/2 font-garamond text-lg text-end">${total.toFixed(2)}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <h1>No Cart</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carts;
