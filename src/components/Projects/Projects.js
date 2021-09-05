import React, { useEffect, useState } from 'react';
import projectData from '../../projectsData/projectData.json'
import Project from '../Project/Project';
import Footer from '../Shared/Footer/Footer';

const Projects = () => {
    const [projects, setProjects] = useState([projectData]);
    useEffect(() => {
        setProjects(projectData);
    }, [])
    return (
        <div>
            <div className="container container-fluid content-row" style={{ marginTop: '30px', color: 'black' }}>
                <div className="row">
                    {
                        projects.map(project => <Project project={project}></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;