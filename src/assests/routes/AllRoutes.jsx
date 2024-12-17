
  
  import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProductList from "../pages/Products/ProductList";

const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="Product" element = {<ProductList/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default AllRoutes;