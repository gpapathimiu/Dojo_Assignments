import React, {useState} from 'react'



const Display = (props) => {

const {box} = props;

    return (
        <>
        <h2>All your boxes</h2>
        {
            box.map((item, index) => (
                <div
                key={index}
                style={{
                    display: 'inline-block',
                    height: '50px',
                    width: '50px',
                    backgroundColor: item,
                    margin: '15px'
                }}>
                
                </div>
            ))
        }
        </>
    )



}


export default Display;