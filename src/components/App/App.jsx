import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";


const App = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getCategories());
        dispatch(getProducts());
    },[dispatch] )


return (
    <div className="app">
      <Header />
      <div className="container">
        <SideBar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;