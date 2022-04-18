import React from 'react'
import './Navbar.css'
import Notificar from '../../../Images/Notificacion.png'

export const Navbar=()=> {
  return (
    <div className='navbar'>
        <span className='logo'>FullMarket App</span>
        <div className='icons'>
            <div className='icon'>
                <img src={Notificar} className='iconImg' alt=''></img>
                <div className='counter'>2</div>
            </div>
        </div>
    </div>
  )
}
