import { useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox.jsx'
import Display from './components/Display.jsx'

function App() {

  const [checkbox, setCheckbox] = useState([]);

  return (
    <>
  <Checkbox checkbox={checkbox} setCheckbox={setCheckbox}/>
  <Display checkbox={checkbox} setCheckbox={setCheckbox}/>
    </>
  )
}

export default App
