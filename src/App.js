import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Products from "./admin/Products";
import ProdductCreate from "./admin/ProdductCreate";
import ProductEdit from "./admin/ProductEdit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/admin/products" element={<Products />} />

          <Route path="/admin/products/create" element={<ProdductCreate />} />

          <Route path="/admin/products/:id/edit" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
