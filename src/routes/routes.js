import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Restaurants from "../pages/Restaurants/Restaurants";
import RestaurantDetails from "../pages/RestaurantDetails/RestaurantDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;