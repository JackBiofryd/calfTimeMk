import { useState, useEffect, useCallback } from 'react';

export const useAuth = () => {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState('');
	const [isDarkMode, setIsDarkMode] = useState(false);

	const login = useCallback((uId, token, expirationDate) => {
		setUserId(uId);
		setToken(token);

		localStorage.setItem(
			'loginInfo',
			JSON.stringify({
				userId: uId,
				token
			})
		);
	}, []);

	const logout = () => {
		setToken(null);
		setUserId('');
		localStorage.removeItem('loginInfo');
	};

	useEffect(() => {
		const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));

		if (loginInfo && loginInfo.token) {
			login(loginInfo.userId, loginInfo.token);
		}
	}, [login]);

	return [token, userId, login, logout, isDarkMode, setIsDarkMode];
};
