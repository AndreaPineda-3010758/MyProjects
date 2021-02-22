import React, { Component } from "react";
import * as d3 from "d3";
import "./AreaChart.css";

class AreaChart extends Component {
  state = {
    data1: [
      {
        date: "",
        sample: 0,
        score: 0,
        vsly: 0,
      },
    ],
  };

  
  drawAreaChart() {    
    const Months={
        Apr:0,
        May:1,
        Jun:2,
        Jul:3
    }

    const margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = 575 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom;

    const x = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(this.state.data1, function (d) {
          const month=d.date;          
          return Months[month];
        }),
      ])
      .range([0, width]);
    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(this.state.data1, function (d) {
          return d.score;
        }),
      ])
      .range([height, 0]);
    
    
    var xAxis = d3.axisBottom(x).tickFormat(function (d) {
      return d.date;
    }).ticks(4);

    const area = d3
      .area()
      .x(function (d) {
          const month=d.date;
        return x(Months[month]);
      })
      .y0(height)
      .y1(function (d) {
        return y(d.score);
      });

    d3.selectAll("#svgArea").remove();
    const svg = d3
      .select("#areaChart")
      .append("svg")      
      .attr("id","svgArea")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg
      .append("path")
      .datum(this.state.data1)
      .attr("class", "area")
      .attr("d", area);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
      

    svg
    .selectAll(".areaText")
    .data(this.state.data1)
    .enter()
    .append("text")
    .attr("class", "areatext")
    .attr("text-anchor", "middle")
    .attr("fill", "black")    
    .attr("x", function(d,i) {
        const month=d.date;
        return x(Months[month]);
    })
    .attr("y", function(d,i) {
        return y(d.score) -5;
    })
    .text(function(d){
	    return d.score + " %"
    });
    svg
    .selectAll(".areaText2")
    .data(this.state.data1)
    .enter()
    .append("text")
    .attr("class", "areatext")
    .attr("text-anchor", "middle")
    .attr("fill", "black")    
    .attr("x", function(d) {
        const month=d.date;
        return x(Months[month]);
    })
    .attr("y", function(d,i) {
        return height+15;
    })
    .text(function(d){
	    return d.date      
    });
    
  }
  
  getSnapshotBeforeUpdate(prevProps){
    if (prevProps.dataChart !== this.props.dataChart) {
        this.setState({data1:this.props.dataChart});
        
        console.log("Updated");
    }    
}
componentDidUpdate(){
    this.drawAreaChart();
}
  render() {
        return <div></div>;
  }
}

export default AreaChart;