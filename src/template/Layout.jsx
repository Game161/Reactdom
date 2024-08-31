// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    
    <Navbar/>
    <div className="flex mt-0">
    
    {/* Content */}
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout