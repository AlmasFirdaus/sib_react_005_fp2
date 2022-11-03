import React from "react";
import { useSelector } from "react-redux";

const CartRekapTable = ({ item }) => {
  const { products } = useSelector((store) => store.product);
  const productRecap = products.find((product) => product.id === item.product[0].idProduct);
  return (
    <tr className="[&>td]:px-3 [&>td]:py-3 [&>td]:text-base">
      <td className="text-center font-bold">{item.idUser}</td>
      <td className="font-bold">
        <h1>{productRecap.title}</h1>
        <p className="text-gray-500 text-xs">{productRecap.category}</p>
      </td>
      <td className="text-center  font-semibold">${productRecap.price}</td>
      <td className="text-center font-light">{item.product[0].quantity}</td>
      <td className="text-center font-bold">${(productRecap.price * item.product[0].quantity).toFixed(1)}</td>
    </tr>
  );
};

export default CartRekapTable;
