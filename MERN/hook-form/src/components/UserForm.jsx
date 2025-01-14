import React, { useState } from  'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = { 
            firstName: firstName,
            lastName: lastName,
            email: email, 
            password: password,
            confirmPassword: confirmPassword
        };
    }
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label> 
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            
            <input type="submit" value="Create User" />
        </form>
        <div>
        <p>First Name is {firstName}</p>
        <p>Last Name is {lastName}</p>
        <p>Email is {email}</p>
        <p>Password is {password}</p>
        <p>Confirm Password is {confirmPassword}</p>
        </div>
    </div>
    );
};

export default UserForm;