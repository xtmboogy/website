import React from 'react'

function Box(props) {
  return (
    <div className='s-box'>
      <div className='s-b-img'>
       <img src={props.image} alt="props.alt" />
      </div>
      <div className='s-b-text'>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi animi officiis nostrum enim, sit id magni blanditiis consectetur quam quae.
        </p>
        <a href="" className='cv-btn'>(props.button) </a>

      </div>
    </div>
  )
}

export default Box;
