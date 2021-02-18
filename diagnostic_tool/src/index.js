import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GaugeDataChart from './components/GaugeDataChart'
import data from './json-data/data.json';

class App extends Component{
    render(){
        let firstdata;
        data.map((data)=>{
            return(
                firstdata=data.gaugeData[0].name
            );
        })
        return(
            <div>
                <GaugeDataChart/>      
                {firstdata}                
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);