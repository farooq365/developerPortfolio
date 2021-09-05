import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer footer-bg mt-5">
            <div className="container h-100">
                <div className="row">
                <div className="col-md-4">
                    <h4>My Top Skills</h4>
                    <div>
                        <ul>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React JS</li>
                            <li>Node JS</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>My Latest work</h4>
                    <ul>
                        <li>Doctor's Portal</li>
                        <li>Chemistry MCQ Challenge</li>
                        <li></li>
                    </ul>
                </div>
                <div className="col-md-4 text-center">
                    <h4>Contact</h4>
                    <a href="mailto:moju.cse.pust@gmail.com" className="text-center">mojnu.cse.pust@gmail.com</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;