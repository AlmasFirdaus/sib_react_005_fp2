import CartProductTable from "../../components/admin/products/CartProductAdminTable";

const ProductsAdmin = () => {
    return ( 
        <section id="rekap" className="pt-16 pb-28 font-quicksand">
      <h1 className="pt-10 text-center font-bold uppercase text-2xl">Products</h1>
      <div className="pt-5 p-1.5 w-full flex flex-col justify-center items-center">
        <table className="border w-3/5 divide-y divide-gray-200">
          <thead className="bg-gray-5">
            <tr>
             <th>No</th>
              <th colSpan={2} className="min-w-[30rem] px-6 py-3 text-sm font-bold text-gray-500 uppercase ">Product</th>
              <th className="px-6 py-3 text-sm font-bold text-gray-500 uppercase ">Stock</th>
              <th className="px-6 py-3 text-sm font-bold text-gray-500 uppercase ">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <CartProductTable/>
          </tbody>
        </table>
      </div>
    </section>
     );
}
 
export default ProductsAdmin;