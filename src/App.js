import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Custom_button from './components/custom_button';
import Slide from './components/Slide';
import Card from './components/card';
import {SiFreelancer, SiMysql} from 'react-icons/si'
import {FaReact, FaGitAlt, FaAngular, FaBootstrap} from 'react-icons/fa'

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='container pt-5 px-5 mt-5'>
        <div className='row text-white'>
          <h1>Hola, me llamo Julian</h1>
          <h1>soy un Frontend Developer</h1>
          <div className='container col-12 col-md-11'>
            <div className='row'>
              <p className='text col-11 col-md-5 my-3'>Adaptable y autodidacta, con habilidad para aprender rápidamente nuevas tecnologías. Comprometido con el crecimiento continuo y la excelencia, siempre en busca de oportunidades para expandir mis conocimientos y habilidades en el campo del desarrollo.</p>
            </div>
          </div>
          <Slide number={'one'} />
          <div className='container'>
            <div className='row d-flex justify-content-start'>
              <div className='col-12 col-md-8'>
                <Custom_button name={"Start the journey"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='me-5 container mt-5'>
        <div className='row text-white'>
          <p className='col-12'>Services</p>
          <h1 className='title'>Skill-Set</h1>
          <div className='horizontal_line col-1 pe-5'></div>
          <div className='container pb-5'>
        <div className='row'>
          <Card icon={<FaReact size="40"/>} title={"React"}/>
          <Card icon={<FaGitAlt size="40"/>} title={"Git Version Control"}/>
          <Card icon={<FaAngular size="40"/>} title={"Angular"}/>
          <Card icon={<SiMysql size="40"/>} title={"MySQL"}/>
          <Card icon={<FaBootstrap size="40"/>} title={"Bootstrap"}/>
          <Card icon={<SiFreelancer size="40"/>} title={"Freelancer"}/> 
        </div>
      </div>
        </div>
      </div>
      

      <div className='container me-5'>
        <div className='row justify-content-center'>
          <h1 className='title'>Connect with me</h1>
          <input className='my-2 col-11 col-md-5 py-2' placeholder='Email' />
          <div className='col-md-7'></div>
          <input className='my-2 col-11 col-md-5 py-2 mb-4' placeholder='Message' />
          <div className='col-md-7'></div>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-11 col-md-7'>
                <Custom_button name={"Stay Connected"}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <span className='text-center col-12' style={{color: 'var(--gray)'}}>@Kleist_Julian</span>
        </div>
      </div>

    </div>
  );
}

export default App;
