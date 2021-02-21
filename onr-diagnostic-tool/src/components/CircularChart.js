import React, {Component} from "react";
import * as d3 from "d3";
import "./CircularChart.css";

class CircularChart extends Component{
    drawChart(){
        const data = [{
            value: this.props.data
        }, {
            value: 100-this.props.data
        }];
    const width=100;
    const height=100;    
    const textInside1=this.props.data+" %";
    const textInside2="N/A"
    const svg = d3.select("#chartN"+this.props.charIndex)
    .append("svg")
    .attr("width", {width})
    .attr("height", {height});
    const radius = 70;
    const g = svg.append('g').attr('transform', `translate(${width}, ${height-20})`);    
    const color = d3.scaleOrdinal(['rgb(13, 94, 138)','#CCCCCC']);
    const pie = d3.pie().sort(null).value(d => d.value);
    const path = d3.arc().outerRadius(radius).innerRadius(radius-20);
    const pies = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');
    pies.append('path').attr('d', path).attr('fill', d => color(d.data.value));
    pies.append('text').text(textInside1).attr('transform', `translate(${-20}, ${0})`).attr("class","textStyle").style("fill","rgb(13, 94, 138)");
    pies.append('text').text(textInside2).attr('transform', `translate(${-10}, ${20})`).attr("class","textStyle2");
    }
    componentDidMount(){
        this.drawChart();
    }
    render(){
        return(
            <div>
            </div>
        )
    }
}

export default CircularChart;