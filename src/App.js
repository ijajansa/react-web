import React from 'react';
import Home from "./Home";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from "./Category";
import Product from "./Product";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";  

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/products" element={<Product />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/addcategory" element={<AddCategory />} />  
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
