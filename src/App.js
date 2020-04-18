import React from "react";
 import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Reservation from "./containers/Reservation";
import Tables from "./containers/Tables";
// import Contact from "./containers/Contact";
// import Nav from "./Nav";
// import PortFolio from "./containers/PortFolio";
// import Footer from "./Footer/Footer";


function App (){
    return (
      <Router>
   <div>
  
      
      <Route exact path="/" component={Home} />
     <Route exact path="/Resevation" component={Reservation} />
     <Route exact path="/Tables" component={Tables} />
   
    </div>
   
 </Router>

        )
        
  

}
export default App;