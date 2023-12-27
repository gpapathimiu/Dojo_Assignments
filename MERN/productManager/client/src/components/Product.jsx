import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Product(props) {

const { products, setProducts } = props;


const [title, setTitle] = useState("");
const [price, setPrice] = useState(0);
const [description, setDescription] = useState("");
const [error, setError] = useState("")
const [success, setSuccess] = useState("")

const createProduct = (e) => {
    e.preventDefault();

    if (title.length < 5 || price < 1 || description.length < 5) {
        setError("Your form has some unresolved issues!");
    } else {
        axios.post("http://localhost:8001/api/products", {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res.data);
            const newProductData = {
                title,
                price,
                description
            };
            // Add the product to the state without ID for now
            setProducts([...products, newProductData]);
            setTitle("");
            setPrice(0);
            setDescription("");
            setError("");
            setSuccess("Product added successfully!");

            // Fetch the updated products after adding
            axios.get("http://localhost:8001/api/products")
                .then((res) => {
                    // Once you have the updated product list with IDs, update the state
                    setProducts(res.data.products);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch(err => {
            setError("There was an issue adding the product!");
            console.log(err);
        });
    }
};


  return (
    <div>
        <form style={{lineHeight: "2.5"}} onSubmit={createProduct}>
            <h1>Product Manager</h1>
            {
                error ? <p>{error}</p> : <p>{success}</p>
            }
            <div>
                <label>Title: </label>
                <input type="text" placeholder="product title here" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price ($): </label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" placeholder="product description here" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <button>Create</button>
        </form>
        </div>
  )
}

export default Product