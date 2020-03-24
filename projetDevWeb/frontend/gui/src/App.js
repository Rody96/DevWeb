import React, {Component} from 'react';
import './App.css';
//import {Layout,Header,NavBar,Drawer,Content} from 'react-mdl';
//import Main from './Components/main';
//import {Link,BrowserRouter as Router} from 'react-router-dom';
//import Map from './Map/indexMap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Nav} from 'react-bootstrap';
//import Navbar from 'react-bootstrap/Navbar'

class App extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/Arbres_Remarquables/');
      const items = await res.json();
      this.setState({
        items
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <div key={item.nom_français}>
            <h1>{item.nom_français}</h1>
            <span>{item.nom_scientifique}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;