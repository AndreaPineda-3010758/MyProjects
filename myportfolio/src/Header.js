import React, { Component } from "react";
import Image1 from './img/bg-masthead.png';
import Image2 from './img/codeLoop.jpg';
import Image3 from './img/thanks.gif';
import './Header.css'
import Carousel from "react-bootstrap/Carousel";
const mystyles={
    // backgroundImage:`url(${Background})`,
    height:'50vh',
    backgroundSize:'cover'
}

class Header extends Component{
    
    render(){
        return(
            <div>                
                <Carousel controls={false} indicators interval={2500} pause={false} style={mystyles}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Image1} alt="First" style={{height:"100vh"}}/>                    
                        <Carousel.Caption>
                            <h3>First Slide Label</h3>
                            <p>Scene1</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Image2} alt="Second"/>                    
                        <Carousel.Caption>
                            <h3>First Slide Label</h3>
                            <p>Scene1</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Image3} alt="Third"/>                    
                        <Carousel.Caption>
                            <h3>First Slide Label</h3>
                            <p>Scene1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>  
                <header style={mystyles}>                
                <h1>{this.props.title}</h1>
                <p>A Free Bootstrap Theme</p>
                <a href="#button">{this.props.button}</a>
                </header>
            </div>
            
        );
    }
};

export default Header;
