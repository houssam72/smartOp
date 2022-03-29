import React, { Component } from "react";
import './App.css';
import Particle from './components/Particles/Particles';
import Logo from './components/Logo/Logo';
import MyCard from './components/MyCard/MyCard';

class App extends Component {

  render(){

  return (
    <div>
            <Particle/>
            <Logo/>
            <MyCard/>
    </div>
  );
}
}
export default App;
