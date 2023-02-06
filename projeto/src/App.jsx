import './App.css'

import { AddImage } from './components/AddImage'
import { Home } from './components/Home'
import { Play } from './components/Play'
import { Resume } from './components/Resume'
import {Register} from './components/Register'
import {Login} from './components/Login'

import CardContext from './contexts/CardContext'

import { Route, Routes } from "react-router-dom"


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
          <Route path="/play" element={<Play/>} />
          <Route path="/resume" element={<Resume/>} />

        </Routes>

      </CardContext.Provider>
  
 
    </>

  )
}

export default App
