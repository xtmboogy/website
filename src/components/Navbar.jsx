import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo1.png';



function Navbar() {
  return (
    <div>
      <nav>
        <link to='main' className='logo' /> 
          <img src={logo}  alt='logo'/> 
        
        
        <input className='menu-btn' type='checkbox'  id='menu-btn '/>
        <label className='menu-icon' for='menu-btn'> 
           <span className='nav-icon'></span> 
           </label>

        
        <ul className='menu'>
          <li> <link to='main'  className='ul' /> Home </li>
          <li> <link to='Features' className='ul' /> Features </li>
          <li> <link to='Survices ' className='ul' /> Survices </li>
          <li> <link to='Subscribes'   className='ul'/> Subscribes </li>
          <li> <link to='Contact' className='ul' /> Contact </li>
        </ul>
        <link to='a' className='' To App  /> 
      </nav>
    </div>
  )
}

export default Navbar;
