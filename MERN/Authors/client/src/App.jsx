import Create from './components/Create'
import Display from './components/Display'
import Edit from './components/Edit'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useState} from 'react'
import './App.css'

function App() {

  const [authors, setAuthors] = useState([])

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate to="/authors"/>}/>
      <Route path="/authors/new" element={<Create authors={authors} setAuthors={setAuthors}/>}/>
      <Route path="/authors" element={<Display authors={authors} setAuthors={setAuthors}/>}/>
      <Route path="/authors/edit/:id" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
