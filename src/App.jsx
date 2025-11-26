// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Filteredpage from "./pages/Filteredpage";
import Blogpage from "./pages/Blogpage";
import ProductDetailPage from "./pages/productdetailpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Filteredpage />} />
        <Route path="product/:category" element={<Filteredpage />} />
        <Route path="ourblog" element={<Blogpage />} />
        <Route path="product-detail/:title" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
