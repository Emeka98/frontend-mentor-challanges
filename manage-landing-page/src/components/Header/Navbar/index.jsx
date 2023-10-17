import React from 'react'
import Logo from '../../../assets/logo.svg'
import Burger from '../../../assets/icon-hamburger.svg'

function Navbar() {
  return (
    <div className='flex justify-between'>
        <div>
            <a href="#">
                <img src={Logo} alt="logo" />
            </a>
        </div>

        <div>
            <button><img src={Burger} alt="hamburger menu icon" /></button>
        </div>
      
    </div>
  )
}

export default Navbar
