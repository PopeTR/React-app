import React from 'react';
import styles from './Cockpit.module.css';


const cockpit = (props) => {
    // we have added the classes styling for the button into the cockpit too as it makes sense to have that inside here
    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    
    // we have changed the state to props which we will need to pass
    if (props.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi Im a React App</h1>
            {/* Youll see the classes varibale stored above is used here. To display multiple classes, you need to add the join element */}
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons</button> 
        </div>       
    );
};

export default cockpit;

