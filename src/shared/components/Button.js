import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
	if (props.href) {
		return (
			<a
				href={props.href}
				className={`btn ${props.color && `btn-${props.color}`} ${
					props.danger && 'btn-danger'
				} ${props.inverse && 'btn-inverse'} ${
					props.block && 'btn-block'
				} ${props.extraClasses}`}
				style={props.style}>
				{props.children}
			</a>
		);
	}

	if (props.to) {
		return (
			<Link
				to={props.to}
				exact={props.exact}
				className={`btn ${props.color && `btn-${props.color}`} ${
					props.danger && 'btn-danger'
				} ${props.inverse && 'btn-inverse'} ${
					props.block && 'btn-block'
				} ${props.extraClasses}`}
				style={props.style}>
				{props.children}
			</Link>
		);
	}

	return (
		<button
			type={props.type}
			onClick={props.onClick}
			disabled={props.disabled}
			className={`btn ${props.color && `btn-${props.color}`} ${
				props.danger && 'btn-danger'
			} ${props.inverse && 'btn-inverse'} ${props.block && 'btn-block'} ${
				props.extraClasses
			} ${props.disabled && 'btn-disabled'}`}
			style={props.style}>
			{props.children}
		</button>
	);
}
