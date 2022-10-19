import React from 'react'
import logo from '../components/images/logo.png'
function Navbar() {
  return (
    <div>
           <nav className='nav-bar'>
            <img src= {logo} alt='logo' className='nav--logo'/>

           </nav>

    </div>
  )
}

export default Navbar
