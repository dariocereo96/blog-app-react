import { createContext, useEffect, useState } from 'react';
import { login as authLogin, logout as authLogout, register as authRegister } from '../services/authService';

//Contexto Authentication
export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  token: "",
  message: "",
  error:"",
  profile:{},
}

//Proveedor
export const AuthProvider = ({ children }) => {
  console.log("Se renderizo el context");
  const [state, setState] = useState(initialState);

  useEffect(() => {

    const token = getToken();
    const profile = getProfile();

    if (token) {
      setState({
        ...state,
        isAuthenticated: true,
        token: token,
        profile:JSON.parse(profile),
      });
    }
  }, []);

  const login = (credentials) => {

    setState({ ...state, error: "" });

    authLogin(credentials)
      .then((data) => {
        setState({
          isAuthenticated: true,
          profile:data.profile,
          token: data.token,
          error: "",
        });
        setToken(data.token);
        setProfile(data.profile);
        console.log(data);
      })
      .catch((err) => {
        if (err.response) {
          setState({
            ...initialState,
            error: err.response.data.errors.info,
          });
        }
        else if (err.request) {
          setState({
            ...initialState,
            error: "No se pudo conectar al servidor",
          });
        }
        else {
          setState({
            ...state,
            error: "No se pudo conectar al servidor",
          });
        }
      });
  }

  const logout = () => {
    console.log("saliendo.....");
    authLogout(state.token)
    .then((data)=>{
      setState({
        ...state,
        message:data.message,
        isAuthenticated:false,
        token:"",
        profile:{},
      });
      deleteToken();
      deleteProfile();
    })
    .catch((err) => {
        if (err.response) {
          setState({
            ...state,
            error:"",
          });
          console.error(err.response.data);
        }

        else if (err.request) {
          setState({
            ...state,
            error: "No se pudo conectar al servidor",
          });
        }
        else {
          setState({
            ...state,
            error: "No se pudo conectar al servidor",
          });
        }
      });
  }

  const setToken = (token) => {
    localStorage.setItem("token", token);
  }

  const getToken = () => {
    return localStorage.getItem("token");
  }

  const deleteToken = () => {
    localStorage.removeItem('token');
  }

  const setProfile = (profile) => {
    localStorage.setItem("profile",JSON.stringify(profile));
  }

  const getProfile = () => {
    return localStorage.getItem("profile");
  }

  const deleteProfile = () => {
    localStorage.removeItem('profile');
  }

  return (
    <AuthContext.Provider value={{ state, login , logout}}>
      {children}
    </AuthContext.Provider>
  )
}


