const CartProductAdminTable = () => {
    return ( 
        <tr className="align-top [&>td]:px-2 [&>td]:py-2">
            <td className="text-center">1</td>
            <td className="w-28 h-28">image</td>
            <td>
                <h1 className="text-base font-bold">Ini Nama Product</h1>
                <p className="text-sm">Desc</p>
                <br/>
                <p className="text-xs font-bold opacity-50">Kategori</p>
            </td>
            <td className="text-center">
                <input className="w-16 text-center" placeholder="Angka"></input>
            </td>
            <td className="text-center">
                <button className="rounded-full bg-cyan-500 px-2 py-1 font-bold text-white text-sm hover:bg-cyan-600">Update</button>
            </td>
        </tr>
     );
}
 
export default CartProductAdminTable;