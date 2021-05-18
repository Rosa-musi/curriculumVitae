import React from 'react';

const Education = props => (
    <div className="Education">
        <div className="Education-container" >
            {props.data.map((edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                    <h3>{edu.degree}</h3>
                    <p>{edu.school}</p>
                    <p>{edu.date}</p>
                </div>
            ))}

        </div>
    </div>
)

export default Education