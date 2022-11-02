import React from "react";

const TableRecap = () => {
    return(
        <section id="rekap" className="pt-16 pb-28 font-quicksand">
            <h1 className="pt-10 text-center font-bold uppercase text-2xl">Rekap Penjualan</h1>
            <div className="pt-5 p-1.5 w-full flex flex-col justify-center items-center">
                <table className="border w-3/5 divide-y divide-gray-200">
                    <thead className="bg-gray-5">
                        <tr>
                            <th
                                className="columns-3 px-6 py-3 text-sm font-bold text-gray-500 uppercase "
                            >
                                Product
                            </th>
                            <th
                                className="px-6 py-3 text-sm font-bold text-gray-500 uppercase "
                            >
                                Price
                            </th>
                            <th
                                className="px-6 py-3 text-sm font-bold text-gray-500 uppercase "
                            >
                                Quantity
                            </th>
                            <th
                                className="px-6 py-3 text-sm font-bold text-gray-500 uppercase "
                            >
                                Income
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <th className="text-left px-3 py-3 text-base font-bold">Ini adalah barang <p className="text-left text-gray-500 text-xs">Halo</p></th>
                            <th className="text-center px-3 py-3 text-base font-light">Rp. 50.000</th>
                            <th className="text-center px-3 py-3 text-base font-light">10</th>
                            <th className="text-right  px-3 py-3 text-base font-bold">Rp. 100.000</th>
                        </tr>
                        <tr className="bg-indigo-700 opacity-80 text-white">
                            <th colSpan={2} className="text-center px-3 py-3 text-base font-bold">Total</th>
                            <th colSpan={2} className="text-center  px-3 py-3 text-base font-bold">Rp. 100.000</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default TableRecap