import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./json-data/data.json";
import Grid from "@material-ui/core/Grid";
import Info from "@material-ui/icons/Info";
import Stop from "@material-ui/icons/Stop";
import CircularChart from "./components/CircularChart";
import "./index.css";

class App extends Component {
  state={areaDataObject:null};

  setAreaDataName=()=>{
    this.setState({areaDataObject:'Basics'});  
  }
  render() {    
    const circlecharts = data.map((object) =>
      object.gaugeData.map((card, index) => {
        return (          
          <Grid item xs={4} key={index}>            
            <div className="componentContainer">
              <button className="charContainer" onClick={this.setAreaDataName}>
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

    // data.map((object)=>{
    //   object.areaData.{this.state.areaDataObject}.map(()=>{

    //   })
    // })

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
                {this.state.areaDataObject}
                <div id="areaChart">

                </div>
              </Grid>
            </Grid>
          </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
