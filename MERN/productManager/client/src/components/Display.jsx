import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Display = (props) => {
  const { products, setProducts } = props;

  console.log("Products before deletion:", products);

  useEffect(() => {
    axios.get("http://localhost:8001/api/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

const deleteProduct = (id) => {
  axios.delete(`http://localhost:8001/api/products/${id}`)
    .then((res) => {
      if (res.status === 200) {
        setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
        console.log("Product deleted with ID:", id);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  return (
    <div className="resultDiv">
      <h2>All added products: </h2>
      {
        (products && products.length > 0) ?
          products.map((product, index) => (
            <div className="results p-2" key={index}>
              <p>Product Title: <Link to={`/api/products/${product._id}`}>{product.title}</Link></p>
              <p>Product Price: {product.price}</p>
              <p>Description: {product.description}</p>
              <button onClick={() => deleteProduct(product._id)}>Delete Product</button>
            </div>
          )) :
          <div>
            <p>No products added yet!</p>
          </div>
      }
    </div>
  );
};

export default Display;