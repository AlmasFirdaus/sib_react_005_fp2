import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { calculateTotal, cartsExist, getProducts, loginUser, recapExist, saveExist } from "./features/product/productSlice";
import Carts from "./pages/user/Carts";
import DetailProduct from "./pages/user/DetailProduct";
import Homepage from "./pages/user/Homepage";
import Login from "./pages/all-user/Login";
import Wishlist from "./pages/user/Wishlist";
<<<<<<< HEAD
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import NavbarAdmin from "./components/navbar/NavbarAdmin";
import ProtectedRouteAdmin from "./components/protectedRoute/ProtectedRouteAdmin";
import ProtectedRouteUser from "./components/protectedRoute/ProtectedRouteUser";
import ProtectedRouteLogin from "./components/protectedRoute/ProtectedRouteLogin";
=======
import ProtectedRoute from "./components/login/ProtectedRoute";
// import DashboardAdmin from "./pages/admin/DashboardAdmin";
import NavbarAdmin from "./components/navbar/NavbarAdmin";
import TableRecap from "./components/recapitulation/TableRecap";
>>>>>>> 6d4d2096af8218258d83485e55f07e1e51b6cab7

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
    if (JSON.parse(localStorage.getItem("savedProduct"))) {
      dispatch(saveExist(JSON.parse(localStorage.getItem("savedProduct"))));
    }
    if (JSON.parse(localStorage.getItem("recap"))) {
      dispatch(recapExist(JSON.parse(localStorage.getItem("recap"))));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, carts, products]);

  return (
    <div className="bg-zinc-100">
      <Routes>
<<<<<<< HEAD
        <Route element={<ProtectedRouteUser />}>
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
          <Route
            path="/wishlist"
            element={
              <>
                <Navbar />
                <Wishlist />
                <Footer />
              </>
            }
          />
        </Route>

        <Route element={<ProtectedRouteAdmin />}>
          <Route
            path="/admin"
            element={
              <>
                <NavbarAdmin />
                <DashboardAdmin />
              </>
            }
          />
        </Route>

        <Route element={<ProtectedRouteLogin />}>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Route>
=======
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
        <Route
          path="/wishlist"
          element={
            <>
              <Navbar />
              <Wishlist />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <NavbarAdmin />
              <TableRecap/>
              <Footer/>
              {/* <DashboardAdmin /> */}
            </>
          }
        />
>>>>>>> 6d4d2096af8218258d83485e55f07e1e51b6cab7
      </Routes>
    </div>
  );
};

export default App;
