import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> 
            {/* children takes whatever is in the opening and closing Person tags */}
        </div>
)
};

export default person;