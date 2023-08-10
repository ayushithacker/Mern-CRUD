import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const del = (id) => {
    fetch(`http://localhost:3004/products/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((p) => p.id !== id));
  };
  console.log(products);
  return (
    <Wrapper>
      <Link to="/admin/products/create" className="btn">
        Add Product
      </Link>
      <table>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        {products.map((p) => {
          return (
            <tbody>
              <tr>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>
                  <img src={p.image} alt={p.title} width="90" />
                </td>
                <td>
                  <Link to={`/admin/products/${p.id}/edit`} className="btn">
                    Edit
                  </Link>
                  <button onClick={() => del(p.id)}>Delete</button>
                </td>
              </tr>{" "}
            </tbody>
          );
        })}
      </table>
    </Wrapper>
  );
}

export default Products;
