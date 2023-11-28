import React from "react"

const Display = (props) => {

    const {checkbox, setCheckbox} = props;


    const deleteById = (deletionId) => {
    setCheckbox(checkbox.filter((item) => item.id !== deletionId));

    };


const checkedId = (checkedId) => {

    const updatedCheckbox = checkbox.map((item) => {
        if (item.id === checkedId)
        {return {...item,
            checked: !item.checked}}
            return item;
        })

    setCheckbox(updatedCheckbox);
    }


    return (

        <>
        <h2>Here are all your tasks:</h2>
        {checkbox.map((item, index)=>{
            return (
                <div key={item.id}>
                    <p style={item.checked ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
                    {item.text}
                    </p>
                    <input type="checkbox" onChange={() => checkedId(item.id)}/>
                    <button onClick={() => deleteById(item.id)}>Delete Task</button>
                </div>
            )
        })}
        </>
    )
}

export default Display;
