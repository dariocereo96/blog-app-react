import { createContext, useState} from 'react';
import axios from 'axios';
import authentication from '../services/authService.js';

export const authContext = createContext();

const initialState = {
	errorMessage:"",
	isAuthenticated:false,
	isLoading:false,
	token:"",
	profile:{},
}

export const AuthProvider = ({ children }) => {

	const [state,setState] = useState(initialState);

	const loginAuth = ( data ) => {
		setState({
			...state,
			errorMessage:"",
			isLoading:true,
		});
		authentication.login(data)
		.then((response) => {
			console.log(response);
			setState({
				...state,
				isAuthenticated:true,
				isLoading:false,
				errorMessage:"",
			});
		})
		.catch((err) => {
			if(err.response){
				console.log(err.response);
				setState({
					...state,
					errorMessage:err.response.data.errors.info,
					isLoading:false
				});
			}
			else if(err.request){
				console.log(err.request);
				setState({
					...state,
					errorMessage:"No se pudo conectar al servidor",
					isLoading:false
				});
				console.log(state);
			}
			else{
				console.log("Ocurrio un problema");
				setState({
					...state,
					errorMessage:"No se pudo conectar al servidor",
					isLoading:false
				});
			}
		});
	}

	const registerAuth = ( data ) => {

	}

	return (
		<authContext.Provider value={{loginAuth,state}}>
			{children}
		</authContext.Provider>
	)
}