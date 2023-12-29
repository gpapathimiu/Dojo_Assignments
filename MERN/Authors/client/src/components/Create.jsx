import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Create(props) {

const {authors, setAuthors} = props;

const [name, setName] = useState("")
const [error, setError] = useState("")
const [currentUser, setCurrentUser] = useState("")
const navigate = useNavigate();

const createAuthor = (e) => {
    e.preventDefault();
    handleNameError();


if (name.length >= 3) {
            axios.post("http://localhost:8000/authors/new", {
            name,
            currentUser
        })
        .then(res => {
            console.log(res.data);
            const newAuthor =  {
            name,
            currentUser
            };
    setAuthors([...authors, newAuthor]);
    setName('')
    setCurrentUser("user1")
    navigate('/authors')

axios.get("http://localhost:8000/authors")
                .then((res) => {
                    setAuthors(res.data.authors);
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
    }
}

const handleNavigation = () => {
    navigate('/authors')
}

const handleNameError = () => {
        if (name.length < 1) {
        setError("Please input a name!")
    }
    else if (name.length < 3) {
        setError("Name but be at least 3 characters long!")
    }
    else null
}

const handleUser = (e) => {
    setCurrentUser(e.target.value)
}

    return (
    <form onSubmit={createAuthor}>
        <Link to="/authors">Home</Link>
        <h4>Add a new author below:</h4>
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
        </div>
        <div>
            <button onClick={handleNavigation}>Cancel</button>
            <button type="submit">Create</button>
        </div>
    </form>
  )
}

export default Create