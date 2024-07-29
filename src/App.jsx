import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Category from "./components/Category/Category";
import Billing from "./components/Billing/Billing";
import HomePage from "./components/HomePage/HomePage";
import AddCategory from "./components/AddCategory/AddCategory";
import AddProduct from "./components/AddProduct/AddProduct";
import Table from "./components/Table/Table";
import AddCustomer from "./components/AddCustomer/AddCustomer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="table" element={<Table />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-customer" element={<AddCustomer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
