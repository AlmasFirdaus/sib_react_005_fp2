// import axios frosm "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const WomensClothing = () => {
  let [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((resJson) => setProducts(resJson));
  }, []);
  // category, description, id, image(url), price, rating.rate, rating.count, title

  return (
    <section className="pt-24 pb-28" id="all-category">
      <div className="container px-8 md:px-20 font-quicksand">
        <div className="grid justify-center gap-7 md:grid-cols-2 xl:grid-cols-4">{products && products.map((item, index) => <Cards item={item} index={index} key={index} />)}</div>
      </div>
    </section>
  );
};

export default WomensClothing;
