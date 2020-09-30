import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium'; // this allows you to use media and hover queries in your inline styles!
import styled from 'styled-components';
// Another great library you can use is styled-components.com
// you need to import css into JS. React deals with this. 

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
// the above is inline styling, like you would use in HTML. Careful as the properties need to be STRINGS!
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* instead of listing every person out, you can use map to loop through the array and print what we need */}
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              // adding a key property element so react can understand which elements changed and which didnt
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // Dynamic styling here so that when the people are shown, the button then changes to red!
          style.backgroundColor = 'red';
          style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
          };
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
      <StyleRoot> 
        <div className="App">
          <h1>Hi Im a React App</h1>
          {/* Youll see the classes varibale stored above is used here. To display multiple classes, you need to add the join element */}
          <p className={classes.join(' ')}>This is really working!</p>
          {/* the below syntax this.switchNameHandler is not preferred over the bind syntax below.  */}
          <button 
          // in order to call the inline style above for your button, you need to do the following.  
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

// Here we are injecting functionality to our current app. 
export default Radium(App);