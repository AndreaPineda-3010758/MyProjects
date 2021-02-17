import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../img/softwareDeveloperBkg.jpg";
import Slide2 from "../img/technologybackground.jpg";
import './Header.css';

class Header extends Component{
    render(){
        return(
            <div>
                <Carousel interval={2500} indicators pause={false}>
                    <Carousel.Item>
                        <img className="d-block w-100 custom-img" style={{height: '90vh'}} src={Slide1} alt="SoftwareBackground"/>
                        <Carousel.Caption className="carousel-caption">
                            <div className="captions">
                                <h3>Hello, I am</h3>
                                <h2>Andrea Pineda</h2>
                                <h3>A passionate Software Developer!</h3>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 custom-img" style={{height: '90vh'}} src={Slide2} alt="TechnologyBackground"/>
                        <Carousel.Caption style={{paddingBottom:'40vh'}}>
                            <h3>Hello, I am</h3>
                            <h2>Andrea Pineda</h2>
                            <h3>A passionate Software Developer!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Header;