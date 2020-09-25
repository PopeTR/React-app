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

  switchNameHandler = (newName) => {
   // Dont do this: this.state.persons[0].name = "Thomas"
    this.setState({persons: [
      {name: newName, age: 40},
      {name: 'Tim', age: 28},
      {name: 'Tam', age: 32}
      ] 
    })
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
          <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
          <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Tom!')}
              changed= {this.nameChangedHandler } >My Hobbies: Racing</Person>
          <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
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