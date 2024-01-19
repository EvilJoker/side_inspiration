// import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect} from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:9088/api/hello')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
