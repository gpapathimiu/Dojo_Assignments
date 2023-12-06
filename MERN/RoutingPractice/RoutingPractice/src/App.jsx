import './App.css'
import Home from './components/Home.jsx'
import Display from './components/Display.jsx'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:word" element={<Display/>}/>
        <Route path="/:word/:color/:backgroundColor" element={<Display/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
