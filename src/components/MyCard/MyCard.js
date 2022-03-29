import React,{Component} from 'react';
import Searchbox from './CardList/Searchbox';
import Cardlist from './CardList/Cardlist'

class MyCard extends Component{


  constructor(){
  	 super()
  	 this.state={
      data:[],
      tab:[],
      surgeon:[],
      speciality:[],
      interventionNumber:[],
      anesthesiteFavorite:[],
      infermiereFavorite:[],
      sallePlusFrequante:[],
      actePlusFrequant:[],
  	 	searchfield:'',
      searchTrueFalse:1,
      scrolle:0


  	 }
  }
  
   componentDidMount(){
    
     fetch('http://localhost:3001',{
       method:'get'
       
    })
    .then(response=>response.json())    
    .then(users=>{
       this.setState({tab:users});
      // this.setState({surgeon:users.})
      console.log(this.state.tab);
      this.setSurgeonsName();
      this.setSpeciality();
      this.setInterventionNumber();
      this.setAnesthesiteFavorite();
      this.setinfermiereFavorite();
      this.setSallePlusFrequante();
      this.setActePlusFrequant();
      this.setData();

          window.addEventListener('scroll', this.handleScroll);

    })

   }

 

  setSurgeonsName=()=>{
    let myTab=[]
    this.state.tab.forEach((ta,i)=>{
         myTab[i]=ta.surgeon;
         
    })
   myTab=[...new Set(myTab)];
   this.setState({surgeon:myTab})
    console.log(this.state.surgeon);
  }

  setSpeciality=()=>{
       let myTab=[],exist=false;
       this.state.surgeon.forEach((surg,i)=>{
          this.state.tab.forEach((ta,j)=>{
             if(surg===ta.surgeon && !exist){
                 myTab[i]=ta.specialty;
                 // console.log(ta.specialty);
                 exist=true;
             }
          })
      exist=false;
       })   
    this.setState({speciality:myTab});
    console.log(this.state.speciality);
  }

  setInterventionNumber=()=>{
    let myTab=[],k=0;
        this.state.surgeon.forEach((surg,i)=>{
             this.state.tab.forEach((ta,j)=>{
               if(surg===ta.surgeon){k++;}

             }) 
             myTab[i]=k;
             k=0; 
        })

    this.setState({interventionNumber:myTab})
    console.log(this.state.interventionNumber);
  }

  setAnesthesiteFavorite=()=>{
    let myTab=[];
        this.state.surgeon.forEach((surg,i)=>{
          let tab=[],k=0;
             this.state.tab.forEach((ta,j)=>{
               if(surg===ta.surgeon && ta.anesthsiste!==''){
                  tab[k]=ta.anesthsiste;k++;
               }

             }) 
             myTab[i]=this.mode(tab);
         

             
        })
    this.setState({anesthesiteFavorite:myTab}) 
    console.log(this.state.anesthesiteFavorite)
  }


  setinfermiereFavorite=()=>{
       let myTab=[];
        this.state.surgeon.forEach((surg,i)=>{
          let tab1=[],tab2=[],k=0;
             this.state.tab.forEach((ta,j)=>{
               if(surg===ta.surgeon ){
                  tab1[k]=ta.nurse1;
                  tab2[k]=ta.nurse2;
                  k++;
               }

             }) 
             tab1=[...tab1,...tab2];
             
             myTab[i]=this.mode(tab1);
             
  })
        this.setState({infermiereFavorite:myTab}) 
      console.log(this.state.infermiereFavorite);

      }

      setSallePlusFrequante=()=>{
        let myTab=[];
        this.state.surgeon.forEach((surg,i)=>{
          let tab=[],k=0;
             this.state.tab.forEach((ta,j)=>{
               if(surg===ta.surgeon ){
                  tab[k]=ta.roomNumber;k++;
               }

             }) 
             myTab[i]=this.mode(tab);
         

             
        })
    this.setState({sallePlusFrequante:myTab}) 
    console.log(this.state.sallePlusFrequante)
         
      }

      setActePlusFrequant=()=>{
        let myTab=[];
        this.state.surgeon.forEach((surg,i)=>{
          let tab=[],k=0;
             this.state.tab.forEach((ta,j)=>{
               if(surg===ta.surgeon ){
                  tab[k]=ta.intervention;k++;
               }

             }) 
             myTab[i]=this.mode(tab);
         

             
        })
    this.setState({actePlusFrequant:myTab}) 
    console.log(this.state.actePlusFrequant)

      }



//mode est une fonction qui nous aide a voir l'element le plus utilise dans un tableau
   mode=(arr)=>{
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

    

    setData=()=>{
        var employees = {
               accounting: []
           };

      this.state.surgeon.forEach((srg,i)=>{
            employees.accounting.push({ 
        "surgeon" : srg,
        "speciality": this.state.speciality[i],
        "interventionNumber": this.state.interventionNumber[i], 
        "anesthesiteFavorite": this.state.anesthesiteFavorite[i],
        "infermiereFavorite": this.state.infermiereFavorite[i],
        "sallePlusFrequante":this.state.sallePlusFrequante[i],
        "actePlusFrequant": this.state.actePlusFrequant[i] 
    });
      })
 
    //classement par nombre d'interventions

      employees.accounting.sort((a,b)=>{
        if(a.interventionNumber<b.interventionNumber){
          return 1;
        }
        else{
          return -1;
        }

      })

      this.setState({data:employees.accounting})
      console.log(this.state.data)
    }

   onSearchchange=(event)=>{
   	  this.setState({searchfield:event.target.value})
   	  if(event.target.value===''){
        this.setState({searchTrueFalse:1})
      }
      else{
        this.setState({searchTrueFalse:0})
      }
   }

   

 handleScroll=(event)=> {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    this.setState({scrolle:scrollY})
}

    
 


  render(){
    const filterMovies=this.state.data.filter(dt=>{
		return( dt.surgeon.toLowerCase().includes(this.state.searchfield.toLowerCase())
	           
             

  )}) 
  

   return(

   <div className='tc' onScroll={this.handleScroll}>
   	
   <Searchbox searchchange={this.onSearchchange} movies={this.state.surgeon}/>
    <Cardlist movies={filterMovies} searchTrueFalse={this.state.searchTrueFalse} scrolle={this.state.scrolle} />

   </div>


   	);


  }




}


export default MyCard;