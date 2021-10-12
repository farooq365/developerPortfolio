import React from 'react';
import './About.css';
import img from '../../images/mojnumiah.png';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div>
            <div className="row text-center mb-3">
                <h1>Who is Mojnu?</h1>
                <h5 className="text-danger"><Typewriter
                    options={{
                        strings: ['CSE Student', 'Web Developer', 'Tutor in Pabna'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h5>
                <div className="social-link mt-5 mb-3">
                    <a href="https://www.linkedin.com/in/codermojnu/" className="color-highlight me-3">
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </a>
                    <a href="https://github.com/coderMojnu" className="color-highlight me-3">
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                    </a>
                    <a href="https://www.facebook.com/coderMojnu" className="color-highlight">
                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                    </a>
                </div>
            </div>
            <blockquote>Mojnu is a full stack web developer, looking for a part time job(remote)</blockquote>
            <div className="row">
                <div className="col-md-6">
                    <div className="summary-list">
                        <ul>
                            {/* <li>'21: code every day and looking for a <span className="color-highlight">full stack web developer</span> role in a software company</li>
                            <li className="mt-3">'20: start learning code to be a <span className="color-highlight">full stack web developer</span></li>
                            <li className="mt-3">'18: admitted Pabna University of Science and Technology to earn a B.Sc. degree in <span className="color-highlight">CSE</span></li> */}
                            <li className="mt-3"><span className="color-highlight">Language:</span> HTML, CSS, JavaScript</li>
                            <li className="mt-3"><span className="color-highlight">Technologies:</span> Bootstrap, React, Git, Node.js, Express.js, MongoDB, Redux</li>
                            <li className="mt-3"><span className="color-highlight">Other:</span> Data Structure and Algorithms, Firebase, Heroku, netlify</li>
                            <li className="mt-3"><span className="color-highlight">Education:</span> B.Sc. in Computer Science at PUST</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img-div">
                        <img src={img} alt="" className="profile-img img-fluid" id="rotate-img" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 mb-5">
                <h6 className="mb-3"><Typewriter
                    options={{
                        strings: ['I am a hard worker'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h6>
            </div>
            <div className="row contact text-center p-3">
                <h5>
                    <a href="/contact" className="text-danger">Want to chat? Contact me here &gt;&gt;</a>
                </h5>
            </div>
        </div>
    );
};

export default About;