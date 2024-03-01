import React from 'react';
import Box from  './Box';
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

function Services() {
  return (
    <div id='services'>
        
        <div className='f-heading'>
          <h1>Services</h1>
         <p>Here are some Services we provide </p> 
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        


        <div className='b-container'>
           <Box image={image1} alt='image1' button='PYTHON'/>
           <Box image={image2} alt='image2' button='REACT'/>
        </div>
      
    </div>
  )
}

export default Services;
