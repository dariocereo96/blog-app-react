import React, { useState } from 'react';
import axios from 'axios';
import api from '../../services/api';


const CreateArticles = (props) => {

    const [loader,setLoader]=useState(false);
    const [error,setError]=useState("");

	//Autenticacion
    const createArticle = async()=>{
        setLoader(true);
        setError("");
        await axios.post(api+'admin/articles',{
            'title':"Mi primer sitio web",
            'body':"Este es un sitio creado por mi para probar los metodos de mi api",
            'status':1,
        })
        .then((response)=>{
            // navigate('/');
        })
        .catch((err)=>{
            if(err.response){
                setError(err.response.data.message);
            }else if(err.request){
                setError('No se pudo conectar al servidor',err.request);
            }else{
                setError('Problemas en la conexion');
            }
        })
        .finally(()=>{
            setLoader(false);
        });
    }



  return (
    <form>
    	<fieldset class="form-group">
    		<label for="formGroupExampleInput">Titulo</label>
    		<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
    	</fieldset>
    	<fieldset class="form-group">
    		<label for="formGroupExampleInput2">Cuerpo</label>
    		<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Example input"/>
    	</fieldset>
    	<fieldset class="form-group">
    		<label for="formGroupExampleInput2">Status</label>
    		<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Example input"/>
    	</fieldset>
        <br/>
        { loader && <div className="spinner-border text-primary" role="status"><span className="sr-only"></span></div>}
        { error && <div class="alert alert-danger" role="alert"><strong>{error}</strong></div>}
    	<button type="button" class="btn btn-info" onClick={createArticle}>Enviar datos</button>
    </form>
  )
}

export default CreateArticles;