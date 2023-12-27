import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import '../App.css'

const Update = () => {
    const navigate = useNavigate()

const [title, setTitle] = useState("");
const [price, setPrice] = useState(0);
const [description, setDescription] = useState("");
const [error, setError] = useState("")
    const [products, setProducts] = useState({})
    const { id } = useParams();
   
    useEffect(()=>{
        axios.get(`http://localhost:8001/api/products/${id}`)
        .then((res)=>{

            setTitle(res.data.product.title)
            setPrice(res.data.product.price)
            setDescription(res.data.product.description)
    })
        .catch((err)=>{
              console.log(err);
        })
      }, [])

    const navigateBack = () => {
        navigate(-1)
    }

    const updateProduct = (e) => {

        e.preventDefault();
        if (title.length <5 || description.length<5 || price<1){
            setError('Your form has some unsolved issues!')
        }
        else{
            
            axios.put(`http://localhost:8001/api/products/edit/${id}`, {
                title,
                price,
                description    
            })
                .then(res=>{
                    console.log(res.data);
                    setTitle("")
                    setPrice(0)
                    setDescription("")
                    navigate(-1)
                })
                .catch(err=>{
                    setError("Your api has some problems!")
                    console.log(err)})

                
        }
    }

  
    return(
        <div>
            <p onClick={navigateBack}> &larr; </p>
            <h1>Update</h1>
            {
                error?
                <p>{error}</p>:
                null
            }

            <form onSubmit={(e)=>updateProduct(e)}>
                <div>
                    <label >Title: </label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                { title.length >0 && title.length <5?
                <p>The title should be 5 characters or more</p>:
                null
                }
                <div>
                    <label>Price: </label>
                    <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                { price < 1 ?
                <p>The price should at least be 1$</p>:
                null
                }
                
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                { description.length >0 && description.length <5?
                <p>The description should be 5 characters or more</p>:
                null
                }
                <navigate to="/api/products"><button>Update product</button></navigate>
                
            </form>

            
        </div>
    )
}
export default Update;