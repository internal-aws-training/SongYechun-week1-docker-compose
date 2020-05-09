import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [userList, setUserList] = useState([])
  
  useEffect(() => {
    fetch("/user/all")
    .then(res => res.json())
    .then(result => setUserList(result))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul style={{ color: '#fff' }}>
          {
            userList.map(item => <li style={{ color: '#fff' }} key={item.id}>{item.name}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
