import { useState, useEffect, useCallback } from 'react';

let logoutTimer;

export const useAuth = () => {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState('');

	const login = useCallback((uId, token, expirationDate) => {
		setUserId(uId);
		setToken(token);
		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

		logoutTimer = setTimeout(
			logout,
			new Date(tokenExpirationDate) - new Date()
		);

		localStorage.setItem(
			'loginInfo',
			JSON.stringify({
				userId: uId,
				token,
				expiration: new Date(tokenExpirationDate).toISOString()
			})
		);
	}, []);

	const logout = () => {
		setToken(null);
		setUserId('');
		localStorage.removeItem('loginInfo');
		clearTimeout(logoutTimer);
	};

	useEffect(() => {
		const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));

		if (
			loginInfo &&
			loginInfo.token &&
			new Date(loginInfo.expiration) > new Date()
		) {
			login(loginInfo.userId, loginInfo.token, loginInfo.expiration);
		}
	}, [login]);

	return [token, userId, login, logout];
};
