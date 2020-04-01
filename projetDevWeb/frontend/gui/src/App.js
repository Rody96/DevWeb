import React from 'react';
import './App.css';
import Main from './Components/main';
import {BrowserRouter as Router, Link} from 'react-router-dom';
//import Map from './Map/indexMap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/landingpage">Parcours Biodiversité</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/PointsofInterest">Points d'intérêts</Link>
          <Link to="/parcoursPersos">Parcours personnalisés</Link>
        </Nav>
       </Navbar.Collapse>
      </Navbar>

      <Main />
    </Router>
  );
}

export default App;
