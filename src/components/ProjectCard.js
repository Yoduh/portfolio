import React from 'react';
import { MDBBtn } from "mdbreact";
import './ProjectCard.scss';

const ProjectCard = ({title, details, image, url}) => {
    const disabled = title.includes("Twitter");
    return (
        <div className="wrapper">
            <div className="card"><img src={image} />
                <div className="info">
                    <h1>{title}</h1>
                    <p>{details}</p>
                    <MDBBtn gradient="blue" href={url} target="_blank" rel="noopener noreferrer" disabled={disabled} className="button">See More</MDBBtn>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;