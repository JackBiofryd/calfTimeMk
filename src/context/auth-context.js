import { createContext } from 'react';

export default createContext({
	token: null,
	login: () => {},
	logout: () => {},
	userId: '',
	isLoggedIn: false
});
