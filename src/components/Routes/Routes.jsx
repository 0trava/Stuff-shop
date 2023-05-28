import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import {ROUTES} from '../../utils/routes';
import SingleProduct from 'components/Products/SingleProduct';
import Profile from 'components/Profile/Profile';
import SingleCategory from 'components/Categories/SingleCategory';


const AppRoutes = () => (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      {/* <Route path={ROUTES.CART} element={<Cart />} /> */}
    </Routes>
  );

export default AppRoutes;