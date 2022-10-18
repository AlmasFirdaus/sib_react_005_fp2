import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { products } = useSelector((store) => store.product);
  console.log("🚀 ~ file: DetailProduct.js ~ line 8 ~ DetailProduct ~ products", products);
  console.log("🚀 ~ file: DetailProduct.js ~ line 8 ~ DetailProduct ~ products", products[0]);
  const product = products ? products.filter((product) => product.id === Number(id))[0] : "";

  if (product) {
    return (
      <section className="pt-16 pb-28">
        <div
          className="w-full h-96 bg-fixed overflow-hidden flex justify-center items-center text-center relative"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)` }}
        >
          <div className="w-full h-full bg-slate-400 mix-blend-multiply"></div>
          <div className="absolute text-white">
            <h1 className="text-white text-4xl font-semibold">{product.title}</h1>
          </div>
        </div>
        <div className="container pt-14">
          <div className="flex justify-center">
            <div className="w-1/2 flex justify-center">
              <img src={product.image} alt={product.title} className="w-full h-96 object-scale-down" />
            </div>
            <div className="w-1/2 flex flex-col justify-between items-center">
              <div className="w-full">
                <h1 className="font-semibold text-3xl text-primary">{product.title}</h1>
                <h2 className="font-semibold text-2xl text-secondary mt-3">$ {product.price}</h2>
              </div>
              <div className="w-full border-t-[3px]"></div>
              <div className="w-full">
                <p>{product.description}</p>
              </div>
              <div className="w-full border-t-[3px]"></div>
              <div className="w-full flex items-center">
                <span className="font-normal text-lg mr-10">QTY</span>
                <div className="w-32 px-5 py-1 bg-slate-50 shadow-md rounded-full flex justify-between">
                  <button className="transition ease-in-out duration-200 hover:text-secondary" onClick={() => setQuantity(quantity >= 1 ? quantity - 1 : 0)}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button className="transition ease-in-out duration-200 hover:text-secondary" onClick={() => setQuantity(quantity < product.quantity ? quantity + 1 : quantity)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default DetailProduct;
