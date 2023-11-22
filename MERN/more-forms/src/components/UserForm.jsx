import React, { useState } from  'react';
    
const UserForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [welcome, setWelcome] = useState(false);
    


        const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("must be 3 characters or longer!");
        } else {
            setFirstNameError("");
        }
    };

            const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("must be 3 characters or longer!");
        } else {
            setLastNameError("");
        }
    };

            const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("must be 3 characters or longer!");
        } else {
            setEmailError("");
        }
    };

                const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    };
                const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
        setConfirmPasswordError("Passwords must match!");    
        }
        else {
            setConfirmPasswordError("");
        }
    };



    return(
        <form onSubmit={(e) => {{e.preventDefault()}}}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={handleFirstName}/>
                {
                    firstNameError ?
                    <p>First name { firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={handleLastName}/>
                {
                    lastNameError ?
                    <p>Last name { lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={handleEmail}/>
                {
                    emailError ?
                    <p>Email { emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="text" onChange={handlePassword}/>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" onChange={handleConfirmPassword}/>
                {
                    confirmPasswordError ?
                    <p>{confirmPasswordError}</p> :
                    ''
                }
            </div>
        </form>
    );
    
};

export default UserForm;
