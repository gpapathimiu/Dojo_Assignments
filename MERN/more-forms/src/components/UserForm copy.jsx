import React, { useState } from  'react';
    
const UserForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [species, setSpecies] = useState("")
    

    const createUser = (e) => {
        
    e.preventDefault();

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        species: species

    };
};

    return(
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Species:</label>
                <input type="text" onChange={(e) => setSpecies(e.target.value)}/>
            </div>
            <input type="submit"/>
        </form>
    );
};
    
export default UserForm;
