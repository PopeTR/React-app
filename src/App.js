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

  switchNameHandler = () => {
   // Dont do this: this.state.persons[0].name = "Thomas"
   this.setState({persons: [
    {name: 'Thomas', age: 40},
    {name: 'Tim', age: 28},
    {name: 'Tam', age: 32}
  ] })
  }
  
  render() {
  return (
    <div className="App">
     <h1>Hi Im a React App</h1>
     <button onClick={this.switchNameHandler}>Switch Name</button>
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default App;
