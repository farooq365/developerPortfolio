import React from 'react';
import './Project.css';

const Project = (props) => {
    const { name, img, description1, description2, live, client, server } = props.project;
    return (
        <div className="col-md-4 mt-2 mb-5">
            <div className="card h-100 w-100">
                <img src={img} className="card-img-top card-img p-2" alt="..."></img>
                <div className="card-body mb-5">
                    <h6 className="card-title text-center text-primary">{name}</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{description1}</li>
                        <li className="list-group-item">{description2}</li>
                    </ul>
                </div>
                <div className="card-footer d-flex justify-content-between" id="foot">
                    <a href={live} className="btn btn-primary me-5">Live</a>
                    <a href={client} className="btn btn-primary">Client</a>
                    <a href={server} className="btn btn-primary">Server</a>
                </div>
            </div>
        </div>
    );
};

export default Project;