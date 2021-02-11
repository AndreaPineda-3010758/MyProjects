import React, { Component } from "react";
import './Services.css';

class Services extends Component{
    render(){
        return(
            <div className="services">
                <h3>services</h3>
                <h2>What we offer</h2>
                <div className="row">
                    {
                        iconObj.map(obj => {
                            return(
                                <Icons icon={obj.icon} title={obj.title} description={obj.description}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const iconObj=[
    {
        icon:<ion-icon name="phone-portrait-outline"></ion-icon>,
        title:'Responsive',
        description:'Looks great on any screen size!'
    },
    {
        icon:<ion-icon name="pencil-outline"></ion-icon>,
        title:'Redesigned',
        description:'Looks great on any screen size!'
    },
    {
        icon:<ion-icon name="heart-outline"></ion-icon>,
        title:'Favorited',
        description:'Looks great on any screen size!'
    },
    {
        icon:<ion-icon name="help-circle-outline"></ion-icon>,
        title:'Questions',
        description:'Looks great on any screen size!'
    }
];

class Icons extends Component{
    render(){
        return(
            <div>
                <span>{this.props.icon}</span>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Services;