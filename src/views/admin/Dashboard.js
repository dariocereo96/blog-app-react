import { useState, useEffect, useContext } from 'react';


const Dashboard = () => {
	const [state,setState] = useState({
		email:"",
		password:""
	});

	const [error,setError] = useState({
		email:"",
		password:""
	});


	const handleChange = (e) => {
		 setState({
	      ...state,
	      [e.target.name]:e.target.value,
	    });
	}



	const login = () => {

		let err = {}

		if(!state.email){
			err={...err,email:"Ingrese su email"}
		}

		if(!state.password){
			err={...err,password:"Ingrese su correo"}
		}

		console.log(err);
		setError({...error,...err});

		console.log(error);

	}

    return (
        <>
            <h1>Dashboard</h1>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" onChange={handleChange} value={state.email}/>
            <label>{error?.email}</label>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleChange} value={state.password}/>
            <label>{error?.password}</label>


            <p>{"Email: "+state?.email +"Password: "+state?.password}</p>

            <button type="button" class="btn btn-info" onClick={login}>Enviar formulario</button>

  
        </>
    )
}

export default Dashboard;
