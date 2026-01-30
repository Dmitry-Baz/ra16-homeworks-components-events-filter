import React from 'react';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-grid">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project.img} alt={project.category} />
                </div>
            ))}
        </div>
    );
};

export default ProjectList;