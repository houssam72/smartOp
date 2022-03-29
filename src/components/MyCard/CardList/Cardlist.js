import React, { Component } from 'react';
import Card from './Card';
import ReactPaginate from "react-paginate";
import './Cardlist.css'
class Cardlist extends Component{

   constructor(props){
     super(props)
     this.state={
        pageNumber:0,
        pagesVisited:0
     }
  }

    changePage = ({ selected }) => {
    console.log(this.props.scrolle)
    this.setState({pageNumber:selected});
    
  };
 

    


    

   render(){
  const users=this.props.movies;

  

    const usersPerPage = 10;
    
  const pagesVisited = this.state.pageNumber * usersPerPage * this.props.searchTrueFalse;


	const Cardcomponent=users
  .slice(pagesVisited, pagesVisited + usersPerPage)
	.map((user,i)=>{
		return <Card key={i}
		id={i+1+pagesVisited}
		surgeon={user.surgeon}
	  speciality={user.speciality}
		interventionNumber={user.interventionNumber}
    anesthesiteFavorite={user.anesthesiteFavorite}
    infermiereFavorite={user.infermiereFavorite}
    sallePlusFrequante={user.sallePlusFrequante}
    actePlusFrequant={user.actePlusFrequant}
    
 
		/>
	})

  const pageCount = Math.ceil(users.length / usersPerPage );	
	

	return (
		<div>
  {Cardcomponent};
  <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={this.changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>);
}
}
export default Cardlist;