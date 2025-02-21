import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // or use Material-UI components

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">My React App</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {/* Add other links if necessary */}
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
