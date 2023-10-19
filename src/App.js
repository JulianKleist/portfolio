import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Custom_button from './components/custom_button';
import Slide from './components/Slide';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container pt-5'>
        <div className='row text-white'>
          <h1>Hello, I'm</h1>
          <h1>a Frontend Developer</h1>
          <div className='container col-11'>
            <div className='row'>
              <p className='text col-7 my-3'>Fond of creating web application designs and bring them to life using code & develop mobile designs</p>

            </div>
          </div>
          <Slide />
          <Custom_button />
        </div>
      </div>
    </div>
  );
}

export default App;
