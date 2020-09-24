import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//this is new for react 6. Before you would use class.  
const app = props => {
  //This sets initial state
  const [personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Tom', age: 30},
      {name: 'Tim', age: 28},
      {name: 'Tam', age: 32}
    ],
  });

    //Upon an event we change the state to this. Be careful as you will need to include ALL state data manually as it overwrites the previous state
  //To get around this you can use multiple useStates. See below we have a new useState for the otherState. You dont have one big state, but multiple
  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    // Dont do this: this.state.persons[0].name = "Thomas"
    setPersonsState({
      persons: [
        {name: 'Thomas', age: 40},
        {name: 'Tim', age: 28},
        {name: 'Tam', age: 32}
      ] 
      otherState: personsState.otherState
    });
  };

  return (
    <div className="app">
     <h1>Hi Im a React App</h1>
     <button onClick={switchNameHandler}>Switch Name</button>
     <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
     <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
     <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App'));
  }


export default App;


 