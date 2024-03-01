import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Subscribe from './components/Subscribe';



const App = () => {
  return (
    <div className='App'>
    <Header />
    <div className='f-heading'>
      <h1>Features</h1>
      { <p>Here are some features of the software</p> }
      <Features/>
      <Services/>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
  
      <Subscribe/>
      
    </div>
  </div>
    );
};

export default App;
