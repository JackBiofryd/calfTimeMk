import React from 'react';

export default function Alert(props) {
	const getIconClassName = type => {
		switch (type) {
			case 'error':
				return 'fas fa-exclamation-circle';
			case 'info':
				return 'fas fa-info-circle';
			default:
				return 'fas icon';
		}
	};

	return (
		<div className={`alert-container my-1-5 alert-${props.type}`}>
			<i className={`${getIconClassName(props.type)} mr-1`}></i>
			<p>
				{props.message}
				{props.code && `: ${props.code}`}
			</p>
		</div>
	);
}
