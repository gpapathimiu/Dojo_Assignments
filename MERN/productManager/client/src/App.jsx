import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import DisplayOne from './components/DisplayOne'
import Update from './components/Update'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/api/products" element={<Home/>}/>
    <Route path="/api/products/:id" element={<DisplayOne/>}/>
    <Route path="/api/products/edit/:id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
