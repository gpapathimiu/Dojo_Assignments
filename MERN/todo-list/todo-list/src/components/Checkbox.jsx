import React, {useState} from 'react';

function Checkbox (props) {

const {checkbox, setCheckbox} = props
const[text, setText] = useState("");
const[error, setError] = useState("");


function addTask(e) {
e.preventDefault();

if (text.length < 1) {
    setError("Please input task!")
}
else if (text.length < 5) {
    setError("Task must be more descriptive!")
}
else {
    setError("")
    setText("")
    setCheckbox([...checkbox,
    {
    text: text,
    id: Math.floor(Math.random() * 1000000)
    }])
};
};


return(
    <>
        <form onSubmit={addTask}>
            <h1>To-Do List</h1>
            <p>Please insert the tasks you would like to get done below! Check the box and delete for each completed task.</p>
            <label>Your task: </label>
            <input type="text" value={text} placeholder="today I want to..." onChange={(e) => setText(e.target.value)}/>
            {
                error ?
                <p>{error}</p> :
                ""
            }
        <button type="submit">Add Task</button>
        </form>

    </>
    )
};




export default Checkbox;
