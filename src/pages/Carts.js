import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartOutlineIcon, ChevronRightIcon, HomeIcon } from "../assets/icons/icon-svg/iconSvg";
import CartProduct from "../components/CartProduct";
import CartProductTable from "../components/CartProductTable";
import { checkoutItem } from "../features/product/productSlice";

const Carts = () => {
  let { carts, total, login } = useSelector((store) => store.product);
  const cartLogin = carts.filter((cart) => cart.idUser === login.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(checkoutItem(cartLogin));
    navigate("/");
  };
  return (
    <section className="pt-16 pb-10 font-quicksand bg-white">
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
      <div className="container px-8 lg:px-20 pt-14 pb-10">
        {cartLogin.length !== 0 ? (
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="hidden w-full pb-10 lg:w-2/3 md:flex">
              <div className="w-full">
                <table>
                  <thead>
                    <tr className="[&>th]:text-start [&>th]:text-primary [&>th]:py-3 border-b-2 ">
                      <th>Product</th>
                      <th></th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartLogin.map((item, index) => {
                      return <CartProductTable product={item} key={index} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex md:hidden justify-start items-start pb-10">
              <div className="w-full">
                <h1 className="font-bold text-primary py-1 border-b-2">Product</h1>
                <div className="grid justify-center gap-7 md:grid-cols-2 xl:grid-cols-4 pt-6">
                  {cartLogin.map((item, index) => (
                    <CartProduct product={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-fit lg:ml-10 lg:w-1/3 bg-slate-100 shadow-sm rounded-xl">
              <div className="w-full px-8 py-10">
                <div className="w-full border-b-2">
                  <h1 className="font-bold text-xl text-primary py-5 capitalize">Order Summary</h1>
                </div>
                <div className="w-full border-b-2 py-5">
                  <div className="flex items-center font-semibold text-lg">
                    <h2 className="w-1/2 tracking-wide text-slate-500">Total</h2>
                    <h2 className="w-1/2 font-garamond text-lg text-end">${total.toFixed(1)}</h2>
                  </div>
                </div>
                <div className="w-full py-5">
                  <button className="w-full px-5 py-1 bg-blueButton rounded-xl text-white brightness-110 transition ease-in-out duration-200 hover:brightness-100" onClick={handleCheckout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-52 flex flex-col justify-center items-center">
            <CartOutlineIcon />
            <h1 className="pt-5 font-bold text-xl tracking-widest">No Cart</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carts;
