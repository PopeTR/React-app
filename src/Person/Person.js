import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p> 
            <input type="text" onChange={props.changed} value={props.name}/>
            {/* the value= updates the name to whatever it is changed to in the state.  */}
        </div>
    )
};

export default person;