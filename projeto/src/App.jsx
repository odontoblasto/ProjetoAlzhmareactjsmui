import './App.css'

import { AddImage } from './components/AddImage'
import { Home } from './components/Home'
import {Profile} from './components/Profile'
import {AddCard} from './components/AddCard'

import {BrowserRouter, Route, Routes,Link } from "react-router-dom"


function App() {

  return (
    <>
 
      {/* <Link to="/">Home</Link>
      <Link to="/register">Registro</Link>
      <Link to="/login">Entrar</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/addimage">AddImage</Link> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/addimage" element={<AddImage />} />
      </Routes>
  
 
    </>

  )
}

export default App
