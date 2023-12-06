import React from 'react'
import { useParams } from 'react-router-dom'

const Display = (props) => {
    
    const {word, color, backgroundColor} = useParams()
    return (
        <div> 
            {
                isNaN(word)? 
                <p style={
                    color?
                    {color: color, backgroundColor: backgroundColor}:null}>
                    This is a word: {word}
                </p>
                :
                <p>
                    This is a number: {word}
                </p>
            }
        </div>
    )
}

export default Display;