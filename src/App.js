import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { calculateTotal, cartsExist, getProducts, loginUser } from "./features/product/productSlice";
import Carts from "./pages/user/Carts";
import DetailProduct from "./pages/user/DetailProduct";
import Homepage from "./pages/user/Homepage";
import Login from "./pages/all-user/Login";

const App = () => {
  const { carts, products } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    if (JSON.parse(localStorage.getItem("login"))) {
      const isLogin = JSON.parse(localStorage.getItem("login"));
      dispatch(loginUser({ isLogin }));
    }
    if (JSON.parse(localStorage.getItem("carts"))) {
      dispatch(cartsExist(JSON.parse(localStorage.getItem("carts"))));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, carts, products]);

  return (
    <div className="bg-zinc-100">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        />
        <Route
          path="/:category"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <Navbar />
              <DetailProduct />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Carts />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
