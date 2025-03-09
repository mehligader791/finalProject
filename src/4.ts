  import React from 'react';
import { render } from 'react-dom';
import App from './App';

function App() {
  const name = "John Doe";
  const age = 30;
  const hobbies = ['Music', 'Reading', 'Hiking'];

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

render(<App />, document.getElementById('root'));