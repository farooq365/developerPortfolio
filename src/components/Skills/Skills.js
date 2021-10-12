import React from 'react';
import Footer from '../Shared/Footer/Footer';

const Skills = () => {
    return (
        <div className="mb-3">
            <div className="container" style={{ marginTop: '30px', color: 'black' }}>
            <div className="row d-flex justify-content-around">
                <div className="col-md-4">
                    <div class="card">
                        <div className="card-body">
                            <h2 className="card-title">Expertise Area</h2>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">HTML5</li>
                                <li className="list-group-item">CSS3</li>
                                <li className="list-group-item">JavaScript</li>
                                <li className="list-group-item">Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Comfortable</h2>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">ES6</li>
                                <li className="list-group-item">Node.js</li>
                                <li className="list-group-item">Express.js</li>
                                <li className="list-group-item">MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Familiar</h2>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">TypeScript</li>
                                <li className="list-group-item">React Native</li>
                                <li className="list-group-item">Redux</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '30px' }}>
                    <div className="col-md-4">
                        <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Tools</h2>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Git</li>
                                <li className="list-group-item">Chrome Dev Tool</li>
                                <li className="list-group-item">VS Code</li>
                                <li className="list-group-item">Firebase Authentication</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Hosting</h2>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Github Pages</li>
                                <li className="list-group-item">Firebase</li>
                                <li className="list-group-item">Netlify</li>
                                <li className="list-group-item">Heroku</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Skills;