import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <App/>
     {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/addimage" element={<AddImage />} />
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
)
