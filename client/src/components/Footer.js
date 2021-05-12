import React from "react";

export default function Footer()
{
    return <footer>
        <p>&copy;2021</p>
        <div>
            <a href="https://github.com/Connerjm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                GitHub
            </a>
            ||
            <a href="https://www.linkedin.com/in/conner-martin-47175211b/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                 Linkedin
            </a>
        </div>
    </footer>;
}