import React, {Component} from 'react';

class AreaChart extends Component{
    
    drawAreaChart(){
        const data = [
            { x: 0, y: 10, },
            { x: 1, y: 15, },
            { x: 2, y: 35, },
            { x: 3, y: 20, },
        ];
    }
    componentDidMount(){
        this.drawAreaChart();
    }
    render(){
        return(
            <div></div>
        );
    }
}