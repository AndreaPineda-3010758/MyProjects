import React from 'react';
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "./CircleChart.css";


const CircleChart=(props)=>{
    return(
        <div className="componentContainer">
        <a href="#htr">
          <div className="charContainer">
            <h3>{props.name}</h3>
            <CircularProgressbarWithChildren
              value={props.score}
              maxValue={100}
            >
              <div>
                <h3>{props.score}%</h3>
                <p className="percentagecommen">N/A</p>
              </div>
            </CircularProgressbarWithChildren>
            <p>Sample:{props.sample}</p>
          </div>
        </a>
      </div>
    );
}

export default CircleChart;