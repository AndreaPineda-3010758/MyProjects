import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Header/>
                <About/>
                <p>HI!!!!!!!!</p>                
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);