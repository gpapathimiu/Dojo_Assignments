import { useState } from 'react'
import './App.css'
import Box from './components/Box.jsx'
import Display from './components/Display.jsx'

function App() {

const [box, setBox] = useState([])

  return (
    <>
    <Box box={box} setBox={setBox}/>
    <Display box={box} setBox={setBox}/>
    </>
  )
}

export default App;
