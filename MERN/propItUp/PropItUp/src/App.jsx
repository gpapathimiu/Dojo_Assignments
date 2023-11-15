import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/PersonalCard.jsx' //important

function App() {
    return (
        <div className="App">
            <Person firstName={ "Jane" } lastName = { "Doe" } age={45} hairColor={"Black"} />
            <Person firstName={ "John" } lastName = { "Smith" } age={88} hairColor={"Brown"} />
            <Person firstName={ "Millard" } lastName = { "Fillmore" } age={50} hairColor={"Brown"} />
            <Person firstName={ "Maria" } lastName = { "Smith" } age={62} hairColor={"Brown"} />
        </div>
    );
}


export default App;
