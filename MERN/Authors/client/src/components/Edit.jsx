import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'


export default function Edit() {

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [currentUser, setCurrentUser] = useState("")

    const { id } = useParams();
    
      useEffect(() => {
    axios
      .get(`http://localhost:8000/authors/${id}`)
      .then((res) => {
        setName(res.data.author.name)
        setCurrentUser(res.data.author.currentUser)
    })
    .catch((err) => {
        console.log(err);
    });
}, []);


const updateAuthor = (e) => {
    e.preventDefault();


if (name.length < 3) {
    setError("The name must be longer!")
}
else {
        axios.put(`http://localhost:8000/authors/edit/${id}`, {
            name,
            currentUser
        })
        .then(res => {
            console.log(res.data);
        setName('');
        setCurrentUser('')
        navigate(-1)
                })
                .catch(err=>{
                    setError("Your api has some problems!")
                    console.log(err)})

                
        }
    }



const handleUser = (e) => {
    setCurrentUser(e.target.value)
}

  return (
    <form onSubmit={updateAuthor}>
        <h4>Edit author:</h4>
        <div>
            <label>Name: </label>
            <input type="text" value={name} placeholder='Author Name' onChange={(e) => setName(e.target.value)}/>
        </div>
        {
            error ? <p>{error}</p> : null
        }
        <div>
        <select onChange={handleUser} value={currentUser}>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
        </select>
        <button>Save changes</button>
        </div>
    </form>
  )
}
