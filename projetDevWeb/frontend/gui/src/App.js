import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './Components/main';
import {Link,BrowserRouter} from 'react-router-dom';
//import Map from './Map/indexMap.js';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Parcours Biodiversité</strong></span>}>
        <BrowserRouter>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </BrowserRouter>
        </Header>
        <Drawer title="Title">
        <BrowserRouter>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </BrowserRouter>
        </Drawer>
        <Content>
            <Main />   
        </Content>
    </Layout>
</div>
  );
}

export default App;
