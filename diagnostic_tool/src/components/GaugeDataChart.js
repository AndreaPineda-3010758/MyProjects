import React, { Component } from "react";
import data from "../json-data/data.json";
import CircleChart from "./CircleChart";
import "./GaugeDataChar.css";
import Grid from "@material-ui/core/Grid";
import Info from '@material-ui/icons/Info';
import Stop from "@material-ui/icons/Stop";

class GaugeDataChart extends Component {
    render() {
        const circlecharts = data.map((object) =>
            object.gaugeData.map((card) => {
                return (
                    <Grid item xs={4}>
                        <CircleChart name={card.name} score={card.score} sample={card.sample} />                        
                    </Grid>
                    
                );
            })
        );
        

        return (
          <div>
              <h3>Filters</h3>
                <div>
                    <p><Stop className="firstItem"/> All CQA Results <Info className="info" /></p>
                    <p><Stop className="secondItem"/> CQAs with Closed Loop <Info className="info" /></p>                  
              </div>
            <div className="charsContainer">
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  {circlecharts}
                </Grid>
              </Grid>
            </div>
          </div>
        );
    }
}

export default GaugeDataChart;
