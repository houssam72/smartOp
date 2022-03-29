import React from 'react';
import Particles from 'react-tsparticles';
import './Particles.css'

const particleOption={
               particles: {
          
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
         
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          
          size: {
            random: true,
            value: 5,
          },
        },
              }

const Particle=()=>{
	return(
   
  <Particles className='particles' 
              params={particleOption}  
              id="tsparticles"
     />
   
 
   
		)

}
export default Particle;