import React from 'react';
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1>its a <span>react js</span> website</h1>
        <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod natus recusandae, corporis obcaecati deleniti fuga velit voluptate culpa delectus excepturi!</p>
        <div className='header-btns'>
          <a href="a" className='cv-btn'>hire me</a>
          <a href="a" className='cv-btn1'>Download app</a>

        </div>
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Header;
