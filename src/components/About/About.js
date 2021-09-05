import React from 'react';
import './About.css';
import img from '../../images/mojnumiah.png';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div>
            <div className="row about-area d-flex align-items-center">
                <div className="col-md-6 p-3">
                    <div className="text-center mb-3">
                        <h1>Who is Mojnu?</h1>
                        <h2><Typewriter
                            options={{
                                strings: ['Web Developer', 'Blogger', 'Tutor in Pabna'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h2>
                        <div className="social-link mt-4">
                            <a href="https://www.linkedin.com/in/codermojnu/" className="color-highlight">
                                <FontAwesomeIcon icon={faLinkedin} size='2x' />
                            </a>
                            <a href="https://github.com/coderMojnu" className="color-highlight">
                                <FontAwesomeIcon icon={faGithub} size='2x' />
                            </a>
                            <a href="https://www.facebook.com/coderMojnu" className="color-highlight">
                                <FontAwesomeIcon icon={faFacebook} size='2x' />
                            </a>
                        </div>
                    </div>
                    <div className="summary-list">
                        <ul>
                            <li>'21: currently code every day and looking for a <span className="color-highlight">front end web developer</span> role in a software company</li>
                            <li className="mt-3">'20: start learning code to be a <span className="color-highlight">full stack web developer</span></li>
                            <li className="mt-3">'18: admitted Pabna University of Science and Technology for earn a B.Sc. degree in <span className="color-highlight">Computer Science</span></li>
                            <li className="mt-3">'17: started tutoring to manage my educational expenses</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 text-center p-3">
                    <img src={img} alt="" className="profile-img img-fluid" />
                </div>
            </div>
            <div className="row contact text-center">
                <h5>
                    <a href="/contact">Want to chat? Contact me here &gt;&gt;</a>
                </h5>
            </div>
        </div>
    );
};

export default About;