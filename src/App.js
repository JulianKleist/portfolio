import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Custom_button from './components/custom_button';
import Slide from './components/Slide';
import Card from './components/card';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='container pt-5 px-5 mt-5'>
        <div className='row text-white'>
          <h1>Hello, I'm</h1>
          <h1>a Frontend Developer</h1>
          <div className='container col-12 col-md-11'>
            <div className='row'>
              <p className='text col-11 col-md-5 my-3'>Fond of creating web application designs and bring them to life using code & develop mobile designs</p>
            </div>
          </div>
          <Slide number={'one'} />
          <Custom_button />
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row text-white'>
          <p className='col-12'>Services</p>
          <h1 className='title'>Skill-Set</h1>
          <div className='horizontal_line col-1 pe-5'></div>
        </div>
      </div>
      <div className='container pb-5'>
        <div className='row'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>


      <div className='container'>
        <div className='row justify-content-center'>
          <h1 className='title'>Connect with me</h1>
          <input className='my-2 col-11 py-2' placeholder='Email'/>
          <input className='my-2 col-11 py-2 mb-4' placeholder='Message'/>
          <Custom_button />
        </div>
      </div>

      
    </div>
  );
}

export default App;
