import React from "react";
import "./home.css";
import "./FontAwesomeIcons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Home = () => {
    return(
        <div className="App"> 
            <h1 className="header"><b>
                App Name
                </b></h1>
            <h3 className="sub-Header"> Words about the website</h3>
            <div style={{fontSize: '75px'}}>
                <FontAwesomeIcon className="arrow-down-icon" icon="arrow-circle-down"/>
                <h6>scroll</h6>
            </div>
            <div>
                <h3 className="about-website-title">Our mission is to provide academic help for all.</h3>
                <h4  className="about-website"> Our forum is home to thousands of questions from a variety of different topics, where users can answer or ask questions of their own, all for free. Our 100s of articles, ranging from a plethora of topics, are also bound to ensure you success this school year.</h4>
            </div>
        </div>
    )
}

export default Home; 
