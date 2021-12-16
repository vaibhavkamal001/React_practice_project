import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Cart from "./router/Cart/component/Cart";
import Home from "./router/Product/components/Home";
import Header from "./router/Product/components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
