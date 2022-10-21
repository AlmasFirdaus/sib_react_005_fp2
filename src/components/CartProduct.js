import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon } from "../assets/icons/icon-svg/iconSvg";
import { addCart, removeItem } from "../features/product/productSlice";

const CartProduct = ({ product }) => {
  console.log("🚀 ~ file: CartProduct.js ~ line 7 ~ CartProduct ~ product", product);
  const { title, image, price, stock, quantity } = product;
  const [qty, setQty] = useState(product.quantity);
  const [qtyLimit, setQtyLimit] = useState(product.quantity);
  const [limitStock, setLimitStock] = useState(false);
  // const { products, carts } = useSelector((store) => store.product);
  // console.log("🚀 ~ file: CartProduct.js ~ line 9 ~ CartProduct ~ carts", carts);
  // const { title, image, price, stock } = products.filter((product) => product.id === product.id)[0];
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(plusTotal(totalPay));
  // }, [dispatch, totalPay]);

  // const handleQuantity = (e) => {
  //   e.preventDefault();
  //   setQty(e.target.value);
  // };

  const handleSubtract = () => {
    setQty(qty >= 1 ? qty - 1 : 0);

    dispatch(removeItem({ product }));
  };

  const handlePlus = () => {
    setQty(qty + 1);
    setQtyLimit(qtyLimit + 1);
    if (qty < stock) {
      dispatch(addCart({ product }));
    } else if (qty >= stock) {
      setLimitStock(true);
    }
  };

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
        <div className="flex flex-col">
          <div className="w-32 px-5 py-1 mr-5 bg-slate-50 shadow-md rounded-full flex flex-row justify-between">
            <button className="transition ease-in-out duration-200 hover:text-secondary" onClick={handleSubtract}>
              <MinusIcon />
            </button>
            <input type="number" value={qty < stock ? qty : stock} disabled className="min-w-[1rem] rounded-full text-center" />
            <button className="transition ease-in-out duration-200 hover:text-secondary" onClick={handlePlus}>
              <PlusIcon />
            </button>
          </div>
          {limitStock && <h2 className="text-sm font-medium text-red-500 pt-2">Stock tidak memenuhi {qtyLimit}</h2>}
        </div>
      </td>
      <td>
        <span className="font-medium">${(quantity * price).toFixed(2)}</span>
      </td>
    </tr>
  );
};

export default CartProduct;
