import { useState, useCallback } from 'react';

export const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const sendRequest = useCallback(
		async (url = '', method = 'GET', body = null, headers = {}) => {
			setIsLoading(true);
			try {
				const response = await fetch(url, {
					method,
					body,
					headers
				});
				let data;
				try {
					data = await response.json();
				} catch (err) {
					throw new Error('Something went wrong, please try again.');
				}

				if (!response.ok) throw new Error(data.msg);

				setIsLoading(false);
				return data;
			} catch (err) {
				setError(err.message);
				setIsLoading(false);
				throw err;
			}
		},
		[]
	);

	return [isLoading, error, sendRequest];
};
