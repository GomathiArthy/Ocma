import Header from "../common/Header";
import Footer from "../common/Footer"
import Nav from "react-bootstrap/Nav"
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import {Link} from 'react-router-dom';

import Box from '@material-ui/core/Box';


export default function UserHomePage() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    }
    const mystyle2 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
       
      }

    const history = useHistory();
    return(
      
        <div>
<Header/>
<div></div>
<Nav 
>
  <Nav.Item>
    <Nav.Link class='font-size:100 px;' style={mystyle2}  href="/add-customer"><h1>ADD CUSTOMER</h1></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  class='margin-left: 540px' style={mystyle2} href="/add-courier" >ADD COURIER</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  class='margin-left: 540px' style={mystyle2} href="/check-status" >CHECK COURIER STATUS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  class='margin-left: 540px' style={mystyle2}   href= "/add-complaint"  >
     ADD COMPLAINT
    </Nav.Link>
  </Nav.Item>
  <>
  <div className="mb-2 ">
    <Link to={`/`}>
    <Button variant="primary  color:blue size=lg">
     LOGOUT
    </Button></Link></div></>

  </Nav>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  
     <Footer/>
     </div>
     
    );
}
