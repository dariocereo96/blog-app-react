
import React, { useState } from 'react';
import Login from './components/Login';
import axios from 'axios';

function App() {

  const getData=()=>{
     axios.get('http://127.0.0.1:8000/api/articles', {
     responseType: 'json'
   }).then((data)=>console.log(data));
  } 

  return (
    <div className="App container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Blogger</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Articles</a>
              <a className="nav-link" href="#">Etiquetas</a>
              <a className="nav-link disabled">Mas recientes</a>
            </div>
          </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" onClick={getData()}>Search</button>
            </form>
        </div>
      </nav>
      <Login/>
    </div>
  );
}

export default App;
