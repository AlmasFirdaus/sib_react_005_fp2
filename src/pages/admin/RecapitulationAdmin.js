import React from "react";
import { useSelector } from "react-redux";
import { CartOutlineIcon } from "../../assets/icons/icon-svg/iconSvg";
import CartRekapTable from "../../components/admin/recapitulation/CartRekapTable";

const TableRecap = () => {
    const { recap, products } = useSelector((store) => store.product);
    let totalRecap = 0;
    for (let itemRecap of recap) {
        console.log(itemRecap.product[0]);
        let productsFind = products.find(
            (item) => item.id === itemRecap.product[0].idProduct
        );
        totalRecap += productsFind.price * itemRecap.product[0].quantity;
    }
    return (
        <section
            id="sales-recap"
            className="pt-16 pb-28 font-quicksand bg-white"
        >
            <div className="container min-h-screen">
                <h1 className="pt-10 text-center font-bold uppercase text-2xl">
                    Sales recapitulation
                </h1>
                {recap.length > 0 ? (
                  <div>
                    <div className="hidden pt-5 p-1.5 w-full md:flex flex-col justify-center items-center">
                        <table className="border w-3/5 divide-y divide-gray-200">
                            <thead className="bg-gray-5 ">
                                <tr className="[&>th]:px-6 [&>th]:py-3 [&>th]:text-sm [&>th]:font-bold [&>th]:uppercase [&>th]:text-gray-500">
                                    <th className="text-center">UserID</th>
                                    <th className="min-w-[20rem] text-center">
                                        Product
                                    </th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Income</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {recap.map((item) => (
                                    <CartRekapTable item={item} key={item.id} />
                                ))}
                                <tr className="bg-indigo-700 opacity-80 text-white">
                                    <th
                                        colSpan={4}
                                        className="text-center px-3 py-3 text-base font-bold"
                                    >
                                        Total
                                    </th>
                                    <th className="text-center  px-3 py-3 text-base font-bold">
                                        $ {totalRecap.toFixed(1)}
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex md:hidden justify-start items-start pb-10">
                        <h1>Halos</h1>
                    </div>
                  </div>
                ) : (
                    <div className="w-full h-52 flex flex-col justify-center items-center">
                        <CartOutlineIcon />
                        <h1 className="pt-5 font-bold text-xl tracking-widest">
                            No Cart
                        </h1>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TableRecap;
