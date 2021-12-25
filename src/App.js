
import React, { useState } from 'react';
import Login from './components/Login';
import axios from 'axios';
import NavBar from './components/NavBar';

function App() {

  const getData=()=>{
     axios.get('http://127.0.0.1:8000/api/articles', {
     responseType: 'json'
   }).then((data)=>console.log(data.data));
  } 

  return (
    <div className="App container">
      {/* <NavBar/> */}
      <Login/>
    </div>
  );
}

export default App;
