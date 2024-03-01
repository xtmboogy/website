import React from 'react';
import featureimage from '../images/Frame 19.png';

function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='feature-image' />

        </div>
        <div className='features-text'>
          <h2>Features</h2>
          <h3>This Appliction <span>SOFTWARE</span> Is Art</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia sint optio ullam accusamus. Consectetur tempore incidunt autem in ad!
        
          </p>
          <button>view more features</button>

        </div>
      
    </div>
  )
}

export default Features;
