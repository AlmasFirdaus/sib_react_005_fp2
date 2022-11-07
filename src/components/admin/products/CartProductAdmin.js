import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStock } from "../../../features/product/productSlice";

const CartProductAdmin = ({ item, index }) => {
    const { id, image, title, description, category, stock } = item;
    const [stockProduct, setStockProduct] = useState(stock ? stock : 0);
    const dispatch = useDispatch();

    const handleStock = (e) => {
        e.preventDefault();
        setStockProduct(e.target.value >= 0 ? e.target.value : 0);
    };

    const handleUpdate = () => {
        dispatch(updateStock({ id: id, stock: stockProduct }));
    };

    return (
        <div className="w-full flex text-primary border-b-2 py-3 container">
            <div className="w-32">
                <img
                    src={image}
                    alt={title}
                    className="w-28 h-28 object-scale-down"
                />
            </div>
            <div className="container">
                <div className=" w-full flex flex-col">
                    <h1 className="pl-4 font-bold">{title}</h1>
                    <h4 className="pl-4 font-medium pt-1">
                        <span className="font-semibold">{category}</span>
                    </h4>
                </div>
            </div>
            <div className="w-32">
                <div>
                    <h4 className="text-center pb-1">Stock</h4>
                    <input
                        className="w-20 text-center border border-blueButton rounded-full"
                        onChange={handleStock}
                        value={stockProduct}
                    ></input>
                </div>
                <div className="pt-2">
                    <button
                        onClick={handleUpdate}
                        className="w-20 rounded-full bg-blueButton brightness-125 px-3 py-1 font-bold text-white text-sm transition duration-200 ease-in-out hover:bg-blueButton hover:brightness-100"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>

        // <tr className="align-top [&>td]:px-2 [&>td]:py-2">
        //   <td className="text-center">{index + 1}</td>
        //   <td className="w-28 h-28">
        //     <img src={image} alt="" />
        //   </td>
        //   <td>
        //     <h1 className="text-base font-bold">{title}</h1>
        //     <p className="text-sm">{description}</p>
        //     <br />
        //     <p className="text-xs font-bold opacity-50">{category}</p>
        //   </td>
        //   <td className="text-center">
        //     <input className="w-16 text-center" onChange={handleStock} value={stockProduct}></input>
        //   </td>
        //   <td className="text-center">
        //     <button onClick={handleUpdate} className="rounded-full bg-blueButton brightness-125 px-3 py-1 font-bold text-white text-sm transition duration-200 ease-in-out hover:bg-blueButton hover:brightness-100">
        //       Update
        //     </button>
        //   </td>
        // </tr>
    );
};

export default CartProductAdmin;
