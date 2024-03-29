import home_icon from './img/home_icon.svg';
import logo from './img/logo.svg';
import instagram from './img/instagram_icon.svg';
import project from './img/projectX_new.jpg';
import './App.css';
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  /*const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })*/
  return (
    <div className="App" >
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

function Home() {
  return (
    <div className="Main-div">
      <div>
        <img src={logo} className="Long-logo" alt="logo" />
      </div>
      <div>
        <p className="Contacts">
          Hebelstrasse 109 <br/>
          4056 Basel <br/>
          Switzerland <br/><br/>
          Via S.Michele Arcangelo 21 <br/>
          21100 Varese <br/> 
          Italy <br/><br/>
          <a className="App-link"
            href="mailto:info@studiotropicana.net"
            target="_blank"
            rel="noopener noreferrer">
            info@studiotropicana.net
          </a>
        </p>
      </div>
      <div className="Blank-div"/>
      <Link to="/projects">
        <div className=" App-logo" >
          <img src={home_icon} className="App-logo" alt="icon" />
        </div>
      </Link>
      <div className="Blank-div"/>
      <div>
        <a className="Insta-logo" href="https://www.instagram.com/studiotropicana/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} className="Insta-logo" alt="instagram" />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div >
      <Link to="/">
        <img src={project} className="Project" alt="project" />
      </Link>
      <div className="Left-div">
        <p className="Image-text">
            009_BBL, 
            Varese, Italy,
            Project 2020 - Photo: © Mikael Olsson
        </p>
      </div>
    </div>
  );
}
export default App;
   /* <div className="App" >
      <header className="App-header">
        <div className="a" onClick={() => set(state => !state)}>
          <a.div className="c back App-logo" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
            <img src={home_icon} className="App-logo" alt="icon" />
          </a.div>
          <a.div className="d front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
            <img src={project} className="d" alt="icon" />
          </a.div>
        </div>
        <div>
          <p className="">
            Hebelstrasse 109 <br/>
            4056 Basel <br/>
            Switzerland <br/><br/>
            Via S.Michele Arcangelo 21 <br/>
            21100 Varese <br/> 
            Italy <br/><br/>
          </p>
        </div>
        <img src={logo} className="Long-logo" alt="logo" />
        <div className="Blank-div">
        </div>
        <div>
          <a className="App-link"
            href="mailto:info@studiotropicana.net"
            target="_blank"
            rel="noopener noreferrer">
            info@studiotropicana.net
          </a>
        </div>
        <div className="Right-img">
          <a className="Insta-logo" href="https://www.instagram.com/studiotropicana/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="Insta-logo" alt="instagram" />
          </a>
        </div>
      </header>
    </div>*/