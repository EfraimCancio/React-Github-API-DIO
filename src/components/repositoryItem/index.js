import React from "react";

const RepositoryItem = ({name, linkToRepo, fullName}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{linkToRepo}</h4>
            <a href="https://github.com/EfraimCancio/Curso-HTML" target="_blank" rel="noreferrer">
               {fullName} 
            </a>

        </div>
    );
};

export default RepositoryItem;