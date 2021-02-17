import React, {Component} from 'react';
import Underline from '../img/underline.png';
import MyPicture from '../img/myPicture.jpg';
import './About.css';
class About extends Component{
    render(){
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>About Me</th>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <img src={Underline} alt="UnderlinePicture" />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={MyPicture} alt="It is me"/>
                  </td>
                  <td>
                      <p>
                        I am a passionate Software Developer that is enthusiastic for technology and
                        acquiring new challenges that allow me to continue building my career and doing 
                        what I love: creating innovative websites that can provide a unique, and amazing
                        user experience. 

                        As a Software developer, I have developed strong knowledge of Object-Oriented 
                        Programming using Java, and C#, PL/SQL, SQL, Python, WPF, JavaScript, HTML, CSS, React.js, back-end, and front-end coding using 
                        ASP.NET Core MVC. Moreover, I am familiar with Node.js, TypeScript, REST API. 
                        In addition, I have four years of work experience in electronic validation engineering. 
                      </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default About;
