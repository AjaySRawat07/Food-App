import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LogIn from "./components/Login/LogIn";

const App = () => {
  const [showLogIn, setShowLonIn] = useState(false);
  return (
    <>
      {showLogIn ? <LogIn setShowLonIn={setShowLonIn} /> : ""}
      <div className="app">
        <NavBar setShowLonIn={setShowLonIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
