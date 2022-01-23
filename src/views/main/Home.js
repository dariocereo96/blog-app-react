import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import ListArticles from './components/ListArticles';
import api from '../../services/api';
import { getArticles } from '../../services/articleService';

const initialState = {
  articles: null,
  error: "",
  loader: false,
  info:"",
}

const Home = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({...state,error:"",loader:true});
    loadArticles();
  }, []);
  
  const loadArticles = () => {
    getArticles()
    .then((data)=>{
      console.log(data);
      setState({
        articles:data,
        error:"",
        loader:false,
      });
    })
    .catch((err) => {
        if (err.response) {
          setState({
            ...initialState,
            error: err.response.data.errors.info,
            loader:false,
          });
        }
        else if (err.request) {
          setState({
            ...initialState,
            error: "No se pudo conectar al servidor",
            loader:false,
          });
        }
        else {
          setState({
            ...initialState,
            error: "No se pudo conectar al servidor",
            loader:false,
          });
        }
      });
  }

  return (
    <>
      <h1>Home</h1>
      {state.articles && <ListArticles data={state.articles}/>}
      {state.loader && <div className="spinner-border text-secondary d-block" role="status"><span className="visually-hidden"></span></div>}
      {state.error && <div className="alert alert-danger my-3" role="alert"><strong>{state.error}</strong></div>}
    </>
  )
}

export default Home;