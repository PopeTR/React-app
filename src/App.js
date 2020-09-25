import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// you need to import css into JS. React deals with this. 

class App extends Component {
  // State can only be used in class based components
  state = {
    persons: [
      {name: 'Tom', age: 30},
      {name: 'Tim', age: 28},
      {name: 'Tam', age: 32}
    ], 
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Tom', age: 40},
      // the below syntax is an event that is called, take that value
      {name: event.target.value, age: 28},
      {name: 'Tam', age: 32}
      ] 
    })
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
              age={person.age} />
          })}
        </div>
      );

    }

    return (
      <div className="App">
        <h1>Hi Im a React App</h1>
        {/* the below syntax this.switchNameHandler is not preferred over the bind syntax below.  */}
        <button 
        // in order to call the inline style above for your button, you need to do the following.  
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        
      </div>
    );
  }
}

export default App;