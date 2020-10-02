import React from 'react';
import styles from './Person.module.css';
// import styled from 'styled-components';
// import Radium from 'radium';
// the above import was added for purposes of linking the css

// below you will see the work of styled components. It is saved to a variable and then you wrap all the content in the variable below. 
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 0 15px;
//     padding: 16px;
//     text-align: center;
 
//     @media (min-width: 500px) {
//        width: 450px;
//     }
//  `;

const person = ( props ) => {
    const rnd = Math.random();
        if (rnd > 0.7) {
            throw new Error('Something went wrong');
        }
    return (
        // <div className="Person" style={style}> When using radium
        // Below is the correct code for styled components
            <div className={styles.Person}>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p> 
                <input type="text" onChange={props.changed} value={props.name}/>
                {/* the value= updates the name to whatever it is changed to in the state.  */}
            </div>
    )
};

export default person;