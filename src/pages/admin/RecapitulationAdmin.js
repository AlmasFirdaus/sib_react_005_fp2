import React from "react";
import CartRekapTable from "../../components/admin/recapitulation/CartRekapTable";

const TableRecap = () => {
  return (
    <section id="rekap" className="pt-16 pb-28 font-quicksand">
      <h1 className="pt-10 text-center font-bold uppercase text-2xl">Rekap Penjualan</h1>
      <div className="pt-5 p-1.5 w-full flex flex-col justify-center items-center">
        <table className="border w-3/5 divide-y divide-gray-200">
          <thead className="bg-gray-5 ">
            <tr className="[&>th]:px-6 [&>th]:py-3 [&>th]:text-sm [&>th]:font-bold [&>th]:uppercase [&>th]:text-gray-500">
              <th className="text-center" >UserID</th>
              <th className="min-w-[20rem] text-center">Product</th>
              <th >Price</th>
              <th>Quantity</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <CartRekapTable/>
            <tr className="bg-indigo-700 opacity-80 text-white">
              <th colSpan={3} className="text-center px-3 py-3 text-base font-bold">
                Total
              </th>
              <th colSpan={2} className="text-center  px-3 py-3 text-base font-bold">
                Rp. 100.000
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableRecap;
