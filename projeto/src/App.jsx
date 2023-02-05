import './App.css'

import { AddImage } from './components/AddImage'
import { Home } from './components/Home'
import {Profile} from './components/Profile'
import {AddCard} from './components/AddCard'
import {Register} from './components/Register'
import {Login} from './components/Login'
import CardContext from './contexts/CardContext'

import {BrowserRouter, Route, Routes,Link } from "react-router-dom"


function App() {

  return (
    <>
 
      {/* <Link to="/">Home</Link>
      <Link to="/register">Registro</Link>
      <Link to="/login">Entrar</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/addimage">AddImage</Link> */}
      <CardContext.Provider value={{memo:{
       
       categoryPessoa: 'teste',
       categoryFamilia: 'teste1',
       categoryLocal: 'teste2',
       categoryEvento: 'teste3',
       photo: '',
     }}}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/addcard" element={<AddCard />} /> */}
          <Route path="/addimage" element={<AddImage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </CardContext.Provider>
  
 
    </>

  )
}

export default App
