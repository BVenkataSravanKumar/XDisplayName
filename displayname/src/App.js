import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFullName(`${firstName} ${secondName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <label>
          First Name: 
          <input 
            type="text" 
            placeholder="First Name"  
            required 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br/>

        <label>
          Second Name: 
          <input 
            type="text" 
            placeholder="Second Name" 
            required
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </label>
        <br/>

        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <p>Full Name: {fullName}</p>
      )}
    </div>
  );
}

export default App;
