import React, {useState} from 'react'



const Box = (props) => {

const {box, setBox} = props;
const [color, setColor] = useState("");

const createBox = (e) => {
e.preventDefault();


setBox([...box, color]);
setColor("")



};

return (
    <>
    <form onSubmit={createBox}>
    <label></label>
    <input type="text" value={color} placeholder=" insert valid color..." onChange={(e) => setColor(e.target.value)}/>
    <button type="submit">Create Box!</button>
    </form>
    </>

)


};



export default Box;