import { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/authContext.js';

ReactDOM.render(
	<AuthProvider><App /></AuthProvider>,
	document.getElementById('root')
);

