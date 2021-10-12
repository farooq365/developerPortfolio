import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#802BB1', fontWeight: '900'}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/home">Home</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/Skills">Skills</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="/blogs">Blogs</a>
                        </li>
                        <li className="nav-item me-5">
                            <a className="nav-link active" href="https://drive.google.com/file/d/1eQK1b2FL0uVJ_2298l9A1PCJsKnBswyr/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;