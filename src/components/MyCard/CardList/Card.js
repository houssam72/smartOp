import React from 'react';
import './Card.css'

class Card extends React.Component {
	 
   render(){

  return (
   <div className='tc  dib br3 pa3 ma2  bw2 shadow-5'> 
     <img alt='robots' src={`https://robohash.org/${this.props.id}?2000*200`} width='250px'/>
       <div> 
     <h2> {this.props.surgeon} </h2>
     <p> Sa spécialité : {this.props.speciality}</p>
     <p> Nombre d’interventions :<strong>{this.props.interventionNumber}</strong></p>
     <p>Anesthésiste favori :{this.props.anesthesiteFavorite}</p>
     <p> Infirmière favorite :{this.props.infermiereFavorite}</p>
     <p> Salle la plus fréquente :{this.props.sallePlusFrequante}</p>
     <p> Acte le plus fréquent :{this.props.actePlusFrequant}</p>
 
       </div>
   

   </div>

  	)

}
}

export default Card; 