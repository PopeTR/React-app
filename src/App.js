import React, { Component } from 'react';
// this is the modular approach to using CSS
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBounday'
// import Radium, { StyleRoot } from 'radium'; // this allows you to use media and hover queries in your inline styles!
// import styled from 'styled-components';
// Another great library you can use is styled-components.com
// you need to import css into JS. React deals with this. 

// cool special syntax below that uses props to change the styling dependant on the state. You can see we parsed the props into the <StyledButton> wrapper below. 
// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  // State can only be used in class based components
  state = {
    persons: [
      // we assign ID's so we can identify elements that might get edited or deleted
      {id: '1', name: 'Tom', age: 30},
      {id: '2', name: 'Tim', age: 28},
      {id: '3', name: 'Tam', age: 32}
    ], 
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // we use the spread operator here to avoid mutating data and so creating a copy
    person.name = event.target.value;
    // event.target.value is the value the user entered

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // previously in the const we were updating the data and manipulating it. This is bad practice so we should either use the spread or slice operator to make a COPY of the code. 
    // You should always update the state in an unmutable fashion!
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render () {

// the above is inline styling, like you would use in HTML. Careful as the properties need to be STRINGS!
    let persons = null;
    let btnClass = [styles.button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* instead of listing every person out, you can use map to loop through the array and print what we need */}
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              // adding a key property element so react can understand which elements changed and which didnt
               
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );
      // Dynamic styling here so that when the people are shown, the button then changes to red!
          // style.backgroundColor = 'red';
          // style[':hover'] = {
          //   backgroundColor: 'salmon',
          //   color: 'black'
          // };

          // Below is the syling used with modular CSS
          btnClass.push(styles.Red);
      }
    // this is a generic class list
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      // Here we are wrapping our entire code in the StyleRoot radium component so you can access the media queries
        <div className={styles.App}>
          <h1>Hi Im a React App</h1>
          {/* Youll see the classes varibale stored above is used here. To display multiple classes, you need to add the join element */}
          <p className={classes.join(' ')}>This is really working!</p>
          {/* the below syntax this.switchNameHandler is not preferred over the bind syntax below.  */}
          {/* Below is using the styledbutton variable styles above and we are parsing in a state to change the style based on state. */}
          <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>        
          {persons}
        </div>
    );
  }
}

// Here we are injecting functionality to our current app. 
export default App;