import React from 'react';
import './App.css';
//import {Layout,Header,NavBar,Drawer,Content} from 'react-mdl';
//import Main from './Components/main';
//import {Link,BrowserRouter as Router} from 'react-router-dom';
//import Map from './Map/indexMap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Parcours Biodiversité</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Points d'intérêts</Nav.Link>
        <Nav.Link href="#pricing">About me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default App;
