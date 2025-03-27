import React from 'react';

const List = ({ title, steps, disableStyle }) => (
    <>
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <ul className="list-inside space-y-4" style={{ listStyleType: disableStyle === "1" ? 'none' : 'disc' }}>
        {steps.map(({item, description}, index) => (
            item ? (
                <li key={index} className="text-lg"><strong>{item}:</strong> {description}</li>
            ) : (
                <li key={index} className="text-lg">{description}</li>
            )
        ))}
        </ul>
    </>
);

export default List;
