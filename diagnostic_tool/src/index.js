import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GaugeData from './components/GaugeData';
import data from './json-data/data.json';

class App extends Component{
    render(){
        let firstdata;
        const newdata=data.map((data)=>{
            return(
                firstdata=data.gaugeData[0].name
            );
        })
        return(
            <div>
                <GaugeData/>      
                {firstdata}          
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);