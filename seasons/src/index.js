import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


//React.Component set up the real component for us when we define a constructor function inside.
class App extends React.Component{     
    // constructor(props){
    //     super(props);
    //     //THIS IS THE ONLY TIME we do direct assignment
    //     //to this.state        
    //     this.state={lat:null, errorMessage:''};        
    // }
    state={lat:null, errorMessage:''};//Babel is goimg to create automatically for us the constructor.

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                //we called setstate!!!!
                this.setState({lat:position.coords.latitude});
            },
            (err)=>{
                this.setState({errorMessage:err.message});//I am updating errorMessage and lat is untouched
            }
        );
    }

    componentDidUpdate(){
        console.log("My component was just updated - it rerendered!");
    }
    
    //It is a good practice to use helper methods always that I have to use conditional that have different returns
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>;
        }   
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }  
        return <Spinner message="Please accept location request"/>; 
    }
    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );     
               
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);