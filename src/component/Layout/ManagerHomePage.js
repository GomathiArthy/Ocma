import Header from "../common/Header";
import Footer from "../common/Footer"
import Nav from "react-bootstrap/Nav"
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import {Link} from 'react-router-dom';

import Box from '@material-ui/core/Box';


export default function ManagerHomePage() {
    const mystyle = {
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
    <Nav.Link class='font-size:100 px;'   href="/add-office"><h1>ADD OFFICE</h1></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  class='margin-left: 540px'  href="/add-staff" >ADD STAFF MEMBER</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  class='margin-left: 540px'  href={`/check`} >CHECK ALL COURIERS</Nav.Link>
  </Nav.Item>
  <>
  <div className="mb-2 ">
    <Link to={`/`}>
    <Button variant="primary  color:blue size=lg">
     LOGOUT
    </Button></Link></div></>

  </Nav>
  
<Footer/>
     </div>
    );
}
