import React,{ Component } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";
 class Tables extends Component{
     state={
         table :[],
         waitList :[]
     }
     render(){
         return(
             <div className="container">
                 <div className="jumbotron text-center">
            <h1><i className="fa fa-fire"></i> Hot Restaurant</h1>
            <hr></hr>
            <h5>We only have 5 tables! Book your seat before they are all gone!</h5>
           
            <button type="button" className="btn btn-danger">
            <Link className="nav-link" to="/">Home</Link> <i className="fa fa-id-card-o"></i></button>
        </div>
       
        <label className="table"><span>TableList</span></label>
        <div className="tableList"></div>
        <br></br>
        <label className="wait"><span>WaitList</span></label>
        <div className="waitList"></div>




             </div>
         );
     }


 }



export default Tables ;