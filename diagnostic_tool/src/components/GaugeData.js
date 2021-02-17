import React,{Component} from 'react';
import GaugeDataChar from 'react-gauge-chart';
import data from '../json-data/data.json';

class GaugeData extends Component{

    render(){
        const circlecharts= data.map((object)=>
            object.gaugeData.map((card)=>{
                return(
                    <GaugeData />
                )
            })
        )
        return(
            <div>
                {{circlecharts}}
            </div>
        )
    }
}

export default GaugeData;