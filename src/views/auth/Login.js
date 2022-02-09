import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import authentication from '../../services/authService.js';
import { authContext } from '../../context/authContext.js';
import './style.css';

const initialForm = {
  email:"",
  password:""
}

const Login = () => {
  const [form,setForm] = useState(initialForm);
  const [errors,setErrors] = useState({email:"",password:""});

  const { loginAuth,state } = useContext(authContext);
  const { errorMessage, isLoading,isAuthenticated } = state;

  if (!isAuthenticated) {
    alert("No estas autenticado");
  }

  const handleForm = ( e ) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    loginAuth(new FormData(e.target));
  }

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-own">
      <div className="row shadow w-95 mw-700 rounded-3 overflow-hidden">
        <div className="col-md-5 d-none d-md-block p-0">
          <img className="w-100 h-100" src="https://www.publicdomainpictures.net/pictures/230000/nahled/computer-user.jpg" alt="logo1"/>
        </div>
        <div className="col-md-7 px-4 bg-white">
          <div className="row">
            <div className="col-12 text-center py-4">
              <img src="https://fullentretenimiento.com/assetsInicio/img/black-logo.png" alt="logo2"/>
            </div>
            <div className="col-12">
              <h1 className="fs-6" text>INICIAR SESIÓN</h1>
              <p className="fs-7">Inicie sesión para crear, descubrir y conectarse con toda la comunidad <strong>Full entretenimiento</strong></p>
              {
                errorMessage && <div className="p-2 fs-7 alert alert-danger" role="alert">
                <strong>{errorMessage}</strong>
                </div>
              }
            </div>
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 position-relative">
                  <label htmlFor="email" className="form-label fs-7">Correo electronico</label>
                  <input type="email" className="form-control fs-7" id="email" name="email" onChange={handleForm} value={form.email} placeholder="Ingrese su correo electronico"/>
                  <span className="position-absolute fs-7 text-danger end-0">{errors?.email}</span>
                </div>
                <div className="mb-2 position-relative">
                  <label htmlFor="password" className="form-label fs-7">Contraseña</label>
                  <input type="password" className="form-control fs-7" id="password" name="password" onChange={handleForm} value={form.password} placeholder="Ingrese su correo contraseña"/>
                  <span className="position-absolute fs-7 text-danger end-0">{errors?.password}</span>
                </div>
                <div className="mb-2 form-check">
                  <input type="checkbox" className="form-check-input" id="sesion_ckecked"/>
                  <label className="form-check-label fs-7" htmlFor="sesion_ckecked">Mantener sesion</label>
                </div>
                <button type="submit" className="btn btn-primary d-block w-100">
                  { isLoading ?
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    :"Iniciar sesion"
                  }
                </button>
              </form>
            </div>
            <div className="col-12 mt-2">
              <a className="fs-7" href="#">¿Se te olvidó tu contraseña?</a>
              <p className="fs-7">¿No tienes una cuenta? <a href="/register">Registrarse aquí</a></p>
            </div>
          </div> 
        </div>  
      </div>
    </div>
  )
}

export default Login;