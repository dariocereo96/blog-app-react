import React, { useState,useContext,useEffect} from 'react';      
import {AuthContext} from '../../context/authContext';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [form,setForm] = useState({username:'',password:''});
    const [loader,setLoader] = useState(false);
    const {state,login}=useContext(AuthContext);
    const {error,token,isAuthenticated} = state;
    const navigate = useNavigate();


    useEffect(() => {
      if(isAuthenticated){
        navigate("/");
      }
      if(error){
        setLoader(false);
      }
    }, [isAuthenticated,error]);

    const handleForm = (e) => {
      setForm({
          ...form,
          [e.target.name]:e.target.value,
      });
    } 

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
      login({
        email:form.username,
        password:form.password,
      });
    }
   
    return (
        <form className='container' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
            <input type="email" className="form-control" name="username" value={form.name} onChange={handleForm}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" name="password" value={form.password} onChange={handleForm}/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Mantener sesion</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          {loader && <div className="spinner-border text-secondary d-block" role="status"><span class="visually-hidden"></span></div>}
          {error && <div className="alert alert-danger my-3" role="alert"><strong>{error}</strong></div>}
        </form>
    )
}

export default Login;
