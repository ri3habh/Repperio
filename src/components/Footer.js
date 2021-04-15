import React from "react";
import "./Footer.css";
import TeamMembers from "./teamMembers";
import {
    BrowserRouter,
    BrowserRouter as Router, Link
} from 'react-router-dom';

const Footer = () => {
    return(
        <div className="main-footer"> 
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Company Name</h4>
                        <ul className="list-unstyled">
                            <li>111-111-1111</li>
                            <li>location</li>
                            <li>other social media</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled">
                            <li>other stuff</li>
                            <li>more stuff</li>
                            <li>even more stuff</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>MORE WORDS</h4>
                        <ul className="list-unstyled">
                            <li>WORDS</li>
                            <li>words</li>
                            <li>words words words</li>
                        </ul>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} ENTER COMPANY NAME | All Rights Reserved | <Router path="/TeamMembers" component={TeamMembers}><Link>Team Members</Link></Router> | Privacy 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer; 
