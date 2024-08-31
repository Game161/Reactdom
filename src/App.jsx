import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Detail from './pages/Detail.jsx'
import NotFound from './pages/NotFound.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Product' element={<Product/>} />
            <Route path='/Product/:id' element={<Detail/>} />
            <Route path='/Contact/:name' element={<Contact/>}/>
            <Route path='/About' element={<About/>} />
            <Route path='*' element={<NotFound/>} />
         </Routes>
      </Router>
    </>
  )
}

export default App
