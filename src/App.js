import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Custom.css';
import Logo from './Logo'
import Category from './Category'
import Prodcts from './Prodcts'


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <h2 title="Logo"><Logo name="Magento2 Modules "/></h2>
        </div>

        <div className="row">
        <div className="col-3 menu">
        <Category />
        </div>
        <div className="col-9 menu">

        <div><img className="bannerImage" src="http://127.0.0.1/php/mage-react/src/Banner.png" height="400" alt={"Banner"} /></div>
        </div>

        <div className="col-12">
          <h1>Product Collection{1+1}</h1>
           <Prodcts name="product name" />
        </div>


        <div className="col-12 footerclass">
        <div className="footerclass">
        <div className="col-3">
         <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
            <li>Cat 5</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
            <li>Cat 5</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
            <li>Cat 5</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
            <li>Cat 5</li>
          </ul>
        </div>
        </div>
          </div>
        </div>
      </div>


    );
  }
}

export default App;
