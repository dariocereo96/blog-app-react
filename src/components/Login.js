
import React, { useState } from 'react';
import axios from 'axios';
function Login() {
  const [datos, setDatos] = useState([]);
  

  const login=async()=>{
    await axios.get('http://127.0.0.1:8000/api/articles', {
     responseType: 'json'
    }).then((response)=>{
      setDatos(response.data);
    }).catch((error)=>{
      console.log(error);
    });
    
  }
  return (
    <>
     <button onClick={login}>Login</button>
     <p>{datos}</p>
    </>
  );
}

export default Login;