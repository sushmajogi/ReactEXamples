import React from 'react';
import './App.css';


function App() {
  const personArray = [
    { id: 1, name: "john", age: 30 },
    { id: 2, name: "jane", age: 25 },
    { id: 3, name: "bob", age: 40 }
  ];
  return (
    <div className="App">
      <h1> trying react examples
        {personArray.map((person) => (
          <div key={person.id}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
          </div>
        ))}
      </h1>
      <h2>Filtered Results</h2>
      <filter />
    </div>

  );
}

export default App;
