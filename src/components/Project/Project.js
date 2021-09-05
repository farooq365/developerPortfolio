import React from 'react';
import './Project.css';

const Project = (props) => {
    const { name, img, description1, description2, live, github } = props.project;
    return (
        <div className="col-md-4 mt-2 mb-5">
            <div className="card">
                <img src={img} className="card-img-top card-img" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{description1}</li>
                        <li className="list-group-item">{description2}</li>
                    </ul>
                    <div className="card-footer d-flex justify-content-between">
                        <a href={live} className="btn btn-primary me-5">Live</a>
                        <a href={github} className="btn btn-primary">Code</a>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Project;