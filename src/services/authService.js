import api from './api';
import axios from 'axios';

//Iniciar sesion
export const login = ({ email, password }) => {
	return axios.post(api + 'auth/login', {
		email: email,
		password: password
	})
		.then((response) => response.data.data);
}

//Cerrar sesion
export const logout = (token) => {
	const headers = {
		Authorization:'Bearer '+token,
	}
	return axios.post(api + 'auth/logout',{},{headers}).then((response) => response.data);
}

//Registrar usuario
const register = (data) => {
	return axios.post(api + 'auth/register', {
		data
	})
		.then((response) => response.data.data);
}
