import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // State can only be used in class based components
  state = {
    persons: [
      {name: 'Tom', age: 30},
      {name: 'Tim', age: 28},
      {name: 'Tam', age: 32}
    ]
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
  
  render () {
    return (
      <div className="App">
      <h1>Hi Im a React App</h1>
      // the below syntax this.switchNameHandler is not preferred over the bind syntax below. 
      <button onClick={() => this.switchNameHandler('Thomas!!!')}>Switch Name</button>
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
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;