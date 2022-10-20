import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MinusIcon, PlusIcon } from "../assets/icons/icon-svg/iconSvg";

const CartProduct = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { products } = useSelector((store) => store.product);
  const { title, image, price, stock } = products.filter((product) => product.id === item.id)[0];

  const handleQuantity = () => {};
  return (
    <tr className="border-t-2 align-top [&>td]:h-24 [&>td]:py-5 [&>td]:pr-5">
      <td>
        <img src={image} alt="" className="w-28 h-28 object-scale-down" />
      </td>
      <td>
        <span className="font-medium">{title}</span>
      </td>
      <td>
        <span className="font-medium">${price}</span>
      </td>
      <td>
        <div className="w-32 px-5 py-1 mr-5 bg-slate-50 shadow-md rounded-full flex justify-between">
          <button className="transition ease-in-out duration-200 hover:text-secondary" onClick={() => setQuantity(quantity >= 1 ? quantity - 1 : 0)}>
            <MinusIcon />
          </button>
          <input type="number" value={quantity} onChange={handleQuantity} className="min-w-[1rem] rounded-full text-center" />
          <button className="transition ease-in-out duration-200 hover:text-secondary" onClick={() => setQuantity(quantity < stock ? quantity + 1 : quantity)}>
            <PlusIcon />
          </button>
        </div>
      </td>
      <td>
        <span className="font-medium">${item.quantity * price}</span>
      </td>
    </tr>
  );
};

export default CartProduct;
