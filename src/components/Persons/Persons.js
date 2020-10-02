import React from 'react';
import Person from './Person/Person'
// You can see we dont follow the {} syntax as inside this funciton we are ONLY returning something and so the {} can be removed
const persons = (props) => (props.persons.map((person, index) => {
        return <Person 
        // THis has been taken from the App.js and this.deletePersonHandler has been changed to props.clicked because we are not in a class here and we pass this functionality as a prop instead.
          click={() => props.clicked(index)}
          name={person.name} 
          age={person.age}
          // adding a key property element so react can understand which elements changed and which didnt
          key={person.id} 
          changed={(event) => props.changed(event, person.id)} />
      })
);

export default persons;