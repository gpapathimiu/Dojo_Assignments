import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DisplayOne = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([{}]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/products/${id}`)
      .then((res) => {
        setProducts(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8001/api/products/${id}`)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {
        <div>
          <div>
            <h5>Product Title: {products.title}</h5>
            <Link to={`/api/products/edit/${products._id}`}> Edit</Link>
          </div>

          <p>Product Price: {products.price}</p>
          <p>Product Description: {products.description}</p>
          <button onClick={() => deleteProduct(products._id)}>
            Remove Product
          </button>
        </div>
      }
      <Link to="/api/products">Go Home</Link>
    </div>
  );
};
export default DisplayOne;
