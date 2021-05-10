import { NavLink } from "react-router-dom";
import React from 'react';
import Dropdown from 'react-dropdown';
import {Nav,Navbar,NavDropdown} from "react-bootstrap";

const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
const NavBar = () => {
  return (
    
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
    <NavDropdown title="SERVICES" id="nav-dropdown">
      <NavLink>
      <NavDropdown.Item eventKey="4.1">ADD CUSTOMER</NavDropdown.Item>
      </NavLink>
      <NavDropdown.Item eventKey="4.2">ADD COURIER</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">CHECK STATUS</NavDropdown.Item>
      <NavDropdown.Divider />
    </NavDropdown>
    <NavDropdown title="OFFICE DETAILS" id="nav-dropdown1">
      <NavDropdown.Item eventKey="4.1">OUTLET INFORMATION</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">ALL OUTLET INFORMATION</NavDropdown.Item>
      <NavDropdown.Divider />
    </NavDropdown>
    <NavDropdown title="COMPLAINT" id="nav-dropdown2">
      <NavDropdown.Item eventKey="4.1">ADD COMPLAINT</NavDropdown.Item>

      </NavDropdown>
  </Nav>
  );
};

export default NavBar;

// export default class NavBar extends React.Component {
//   render() {
//     return(
//       <div>
//     <Navbar>
//     <Navbar.Header>
//       <a href="#" className="navbar-brand logo">RSUITE</a>
//     </Navbar.Header>
//     <Navbar.Body>
//       <Nav>
//         <Nav.Item>Home</Nav.Item>
//         <Nav.Item>News</Nav.Item>
//         <Nav.Item>Products</Nav.Item>
//         <Dropdown title="About">
//           <Dropdown.Item>Company</Dropdown.Item>
//           <Dropdown.Item>Team</Dropdown.Item>
//           <Dropdown.Item>Contact</Dropdown.Item>
//         </Dropdown>
//       </Nav>
//       <Nav pullRight>
//         <Nav.Item >Settings</Nav.Item>
//       </Nav>
//     </Navbar.Body>
//   </Navbar>
//   </div>
//     );
// };
// }