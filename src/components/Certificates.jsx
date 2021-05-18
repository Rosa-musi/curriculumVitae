import React from 'react';

const Certificates = (props) => (
    <div className="Certificates">
        <div className="Certificates-container">
        {props.data.map((edu, index) => (
            <div className="Certificates-item" key={`Edu-${index}`}>
                <h3>{edu.name}</h3>
                <p>{edu.group}</p>
                <p>{edu.date}</p>
            </div>
        ))}
        </div>
    </div>
)

export default Certificates