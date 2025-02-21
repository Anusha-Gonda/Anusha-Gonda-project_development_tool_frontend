import React from 'react';
import { Nav } from 'react-bootstrap'; // or Material-UI

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Projects</Nav.Link>
        <Nav.Link href="#">Tasks</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
