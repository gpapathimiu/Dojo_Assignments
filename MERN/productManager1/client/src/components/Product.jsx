import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Product() {

const [title, setTitle] = useState("");
const [price, setPrice] = useState(0);
const [description, setDescription] = useState("");
const [error, setError] = useState("")

const createProduct = (e) => {
    e.preventDefault()

if (title.length < 5 || price < 1 || description.length < 5) {
    console.log("error", error)
    setError("Your form has some unresolved issues!")
}
else {
    axios.post("http://localhost:8000/api/products", {
    title,
    price,
    description
    })
    .then(res => 
    {
        console.log(res.data);
        setTitle("");
        setPrice(0);
        setDescription("");
        setError("");
    })
    .catch(err=>{
        setError("Your api has some problems!")
        console.log(err)})
}

}

  return (
    <div>
        <form style={{lineHeight: "2.5"}} onSubmit={createProduct}>
            <h1>Product Manager</h1>
            {
                error ? <p>{error}</p> : null
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