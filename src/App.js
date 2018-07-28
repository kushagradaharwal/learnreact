import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Custom.css';
import Logo from './Logo'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <h2 title ="Logo"><Logo name="Mage React"/></h2>
        </div>

        <div className="row">
        <div className="col-3 menu">
          <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
            <li>Cat 5</li>
          </ul>
        </div>
        <div className="col-9 menu">

        <div><img src="http://127.0.0.1/php/mage-react/src/Banner.png" height="400" alt={"Banner"} /></div>
        </div>

        <div className="col-12">
          <h1>Product Collection</h1>
            <div className="col-3 menu">Prod 1</div>
            <div className="col-3 menu">Prod 2</div>
            <div className="col-3 menu">Prod 3</div>
            <div className="col-3 menu">Prod 4</div>
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
