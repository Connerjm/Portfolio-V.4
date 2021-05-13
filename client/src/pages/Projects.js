import React, { useEffect, useState } from "react";
import Project from "../components/Project";
import getProjects from "../utils/API";

export default function Projects()
{
    const [projects, setProjects] = useState([]);

    useEffect(async () =>
    {
        loadProjects();
    }, []);

    function loadProjects()
    {
        getProjects()
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }

    return (
        <main>
            <div>
                {projects.map(project =>
                    (
                        <Project image={project.openGraphImageUrl} name={project.name} description={project.description} url={project.url} />
                    ))}
            </div>
        </main>
    );
}