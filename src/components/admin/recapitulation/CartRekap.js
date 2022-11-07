import React from "react";
import { useSelector } from "react-redux";


const CartRekap  = ({item}) => {
    const { products } = useSelector((store) => store.product);
    const productRecap = products.find((product) => product.id === item.product[0].idProduct);
    return ( 
        <div className="w-full flex text-primary border-b-2 py-2 container">
                <div className="text-center text-xs w-[2rem]">{item.idUser}</div>
                <div className="container font-medium text-xs w-[12rem]">{productRecap.title}</div>
                <div className="text-center w-[3rem] text-xs">{item.product[0].quantity}</div>
                <div className="pl-4 text-left w-[4rem] text-xs">$ {(productRecap.price * item.product[0].quantity).toFixed(1)}</div>
        </div>
        
     );
}
 
export default CartRekap ;