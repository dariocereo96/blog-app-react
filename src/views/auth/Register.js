import React, { useState, useEffect} from 'react';
import axios from 'axios';
import authentication from '../../services/authService.js';
import './style.css';

const inicialForm = {
	name:"",
	lastname:"",
	email:"",
	password:"",
	photo:"",
}

const inicialErrors = {
	name:[],
	lastname:[],
	email:[],
	password:[],
	photo:[],
}

const Register = () => {

  const [form,setForm] = useState(inicialForm);
  const [errors,setErrors] = useState(inicialErrors);
  const [loader,setLoader] = useState(false);
  const [message,setMessage] = useState("");
  const [status,setStatus] = useState("");

  const register = async ( data ) => {
        setLoader(true);
        setStatus("");
        await authentication.register(data)
        .then((response) => {
          setMessage("Tu registro fue correcto seras redirigido a tu pagina principal.");
          setStatus("success");
          console.log(response);
          setTimeout(() => {
              window.location.href="/admin";
          },2000);
        })
        .catch((error) => {
        	if(error.response)
        	{
        		if(error.response.data.errors)
        		{
        			console.log(error.response.data);
        			setErrors({...inicialErrors,...error.response.data.errors});
        		}
        		else
        		{
        			console.log(error.response.data);
              setStatus("danger");
              setMessage(error.response.data.message);
        		}
        	}
        	else
        	{
        		setStatus("danger");
            setMessage("No se pudo conectar al servidor");
        		console.log(error);
        	}
        })
        .finally(() => {
            setLoader(false);
          }
        );
  }
	
  const imgPreview = (e) => {
  	const urlImagen = URL.createObjectURL(e.target.files[0]);
  	setForm({
  		...form,
  		photo:urlImagen,
  	});
  }

  const handleSubmit = (e) => {
  	e.preventDefault();
  	register(new FormData(e.target));
  }

  const handleForm = (e) => {
  	setForm({
  		...form,
  		[e.target.name]:e.target.value,
  	});
  }
 
  return (
  	<div className="d-flex justify-content-center bg-own">
	    <div className="row shadow w-95 mw-900 rounded-3 my-4 overflow-hidden">
	    	<div className="col-md-5 d-none d-md-block p-0">
	    		<img className="w-100 h-100" src="http://www.altavision.co/ckfinder/userfiles/images/sindrome-de-vision-de-ordenador.jpg" alt="logo1"/>
	    	</div>
	    	<div className="col col-md-7 px-4 bg-white"> 
	    		<div>
		    		<h1 className="fs-5 mt-4">REGISTRATE AHORA!</h1>
		    		<p className="fs-7">Registrarse es gratis y solo toma un minuto. Recuerda que para poder registrarte debes tener un codigo de afiliado.</p>
		    	</div>
          {status && <div className={"p-2 fs-7 alert alert-"+status} role="alert">
            <strong>{message}</strong>
          </div>}
		    	<form onSubmit={handleSubmit} name="formulario">
		    		<div className="mb-3 position-relative">
			          <label htmlFor="name" className="form-label fs-7 mb-1">Nombres</label>
			          <input type="text" className="form-control fs-7" name="name" value={form.name} onChange={handleForm} placeholder="Ingrese su nombre"/>
			          <span className="position-absolute fs-7 text-danger end-0">{errors?.name[0]}</span>
			        </div>
			        <div className="mb-3 position-relative">
			          <label htmlFor="lastname" className="form-label fs-7 mb-1">Apellidos</label>
			          <input type="text" className="form-control fs-7" name="lastname" value={form.lastname} onChange={handleForm} placeholder="Ingrese sus apellidos"/>
			          <span className="position-absolute fs-7 text-danger end-0">{errors?.lastname[0]}</span>
			        </div>
			        <div className="mb-3 position-relative">
			          <label htmlFor="email" className="form-label fs-7 mb-1" value>Correo electronico</label>
			          <input type="email" className="form-control fs-7" name="email" value={form.email} onChange={handleForm} placeholder="Ingrese su correo electronico"/>
			          <span className="position-absolute fs-7 text-danger end-0">{errors?.email[0]}</span>
			        </div>
			        <div className="mb-3 position-relative">
			          <label htmlFor="password" className="form-label fs-7 mb-1">Contraseña</label>
			          <input type="password" className="form-control fs-7" name="password" value={form.password} onChange={handleForm} placeholder="Ingrese su correo contraseña"/>
			          <span className="position-absolute fs-7 text-danger end-0">{errors?.password[0]}</span>
			        </div>
			        <div className="mb-3 position-relative">
					  <label htmlFor="photo" className="form-label fs-7">Foto de perfil</label>
					  <input className="form-control fs-7" type="file" accept="image/*" id="photo" name="photo" onChange={imgPreview}/>
					  <span className="position-absolute fs-7 text-danger end-0">{errors?.photo[0]}</span>
					  <div className="my-2">
					  	<img src={form.photo} id="img-preview" className="d-block w-75 m-auto"/>
					  </div>
					</div>
			    <button className="btn btn-primary d-block w-100" type="submit">
					   {loader?<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
					   :"Crear cuenta"}
					</button>
			        <p className="fs-6 m-0 py-3">¿Ya tienes cuenta? <a href="/login">Inicia sesion</a></p>
			    </form>
	    	</div>
	    </div>
	</div>
  )
}

export default Register;