import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
  render(){
    return(
      <div>
        <Navigation logoTitle="Andrea Pineda Portfolio"/>
        <Header title="Stylish Portfolio" button="Find Out More"/>
        <Services/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
