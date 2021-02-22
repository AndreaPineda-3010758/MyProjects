import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./json-data/data.json";
import Grid from "@material-ui/core/Grid";
import Info from "@material-ui/icons/Info";
import Stop from "@material-ui/icons/Stop";
import CircularChart from "./components/CircularChart";
import AreaChart from "./components/AreaChart";
import "./index.css";

class App extends Component {
  state={areaDataObject:[{
    date:"",
    sample:0,
    score:0,
    vsly:0
 }],
test:1};

  setAreaDataName=(event)=>{
    const nameButton=event.currentTarget.id;
    const areaData="areaData";  
    const valuesAreaChart=data[0][areaData][nameButton];    
    this.setState((prevState, props) => ({
      test: prevState.test + 1
  }));
  this.setState((prevState, props) => ({
    areaDataObject:valuesAreaChart
}));
  }
  render() {    
    const circlecharts = data.map((object) =>
      object.gaugeData.map((card, index) => {
        return (          
          <Grid item xs={4} key={index}>            
            <div className="componentContainer">            
              <button className="charContainer" id={card.name} onClick={this.setAreaDataName}>
                  <h3>{card.name}</h3>
                  <span id={"chartN" + index} className="circularStyle"></span>
                  <CircularChart charIndex={index} data={card.score}/>                  
                  <div className="footerChart">Sample:{card.sample}</div>
              </button>
            </div>
          </Grid>
        );
      })
    );

    return (
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={6}>
              <h3>Filters</h3>
              <div>
                <p>
                  <Stop className="firstItem" /> All CQA Results{" "}
                  <Info className="info" />
                </p>
                <p>
                  <Stop className="secondItem" /> CQAs with Closed Loop{" "}
                  <Info className="info" />
                </p>
              </div>
              <div>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    {circlecharts}
                  </Grid>
                </Grid>              
              </div>
              </Grid>
              <Grid item xs={6}>                
                <div id="areaChart">
                <p>{this.state.test}</p>
                  <p>{this.state.areaDataObject[0].score}</p>
                  <AreaChart dataChart={this.state.areaDataObject}/>
                </div>
              </Grid>
            </Grid>
          </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
