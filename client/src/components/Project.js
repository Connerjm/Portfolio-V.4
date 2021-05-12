import React from "react";

export default function Project(props)
{
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="A small screenshot of the assosiated project." />
            </div>
            <div className="card-content">
                <div className="content">
                    <h4 className="title">{props.name}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            <footer className="card-footer">
                <a href={props.url} target="_blank" className="card-footer-item">Repo</a>
                {props.deployment ? <a href={props.deployment} target="_blank" className="card-footer-item">Deployment</a> : <p className="card-footer-item">N/A</p>}
            </footer>
        </div>
    );
}