import React from "react";

const CartRekapTable = () => {
    return (
        <tr className="[&>td]:px-3 [&>td]py-3 [&>td]:text-base">
            <td className="text-center">
                1
            </td>
            <td className="font-bold">
                Ini adalah barang{" "}
                <p className="text-gray-500 text-xs">Halo</p>
            </td>
            <td className="text-center  font-light">
                Rp. 50.000
            </td>
            <td className="text-center font-light">10</td>
            <td className="text-center font-bold">
                Rp. 100.000
            </td>
        </tr>
    );
};

export default CartRekapTable;
