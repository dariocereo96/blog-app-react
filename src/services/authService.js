import api from './api';
import axios from 'axios';

//Iniciar sesion
const login = ( data ) => {
	return axios.post(api + 'auth/login',data);
}

//Cerrar sesion
const logout = ( token ) => {
	const headers = {
		Authorization:'Bearer ' + token,
	}
	return axios.post(api + 'auth/logout',{},{ headers });
}

//Registrar usuario
const register = ( data ) => {
	return axios.post(api + 'auth/register',data);
}

const authentication = {
	login,
	logout,
	register,
}

export default authentication;