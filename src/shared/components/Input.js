import React, { useReducer, useEffect } from 'react';
import { validate } from '../../utils/validators';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.value,
				isValid: action.isValid
			};
		case 'TOUCH':
			return {
				...state,
				isTouched: true
			};
		default:
			return state;
	}
};

export default function Input(props) {
	const [state, dispatch] = useReducer(inputReducer, {
		value: props.initialValue || '',
		isValid: props.initialValid || false,
		isTouched: false
	});

	const handleChange = e => {
		const { value } = e.target;
		let isValid = true;
		props?.validators && (isValid = validate(value, props.validators));
		// If its not required and user hasnt inputed anything, cancel the validation and just set it to true
		if (props.notRequired && !value) {
			isValid = true;
		}

		dispatch({ type: 'CHANGE', value, isValid });
	};

	const handleBlur = () => dispatch({ type: 'TOUCH' });

	const { id, onInput } = props;
	const { value, isValid } = state;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [value, isValid, id, onInput]);

	return (
		<div
			className={`form-group my-1-5 center ${
				!state.isValid && state.isTouched && 'form-group-invalid'
			}`}>
			<label htmlFor={props.name} className="form-label lead">
				{props.label}
			</label>
			<input
				type={props.type}
				value={state.value}
				name={props.name}
				id={props.id}
				onChange={handleChange}
				className={`input ${
					!state.isValid && state.isTouched && 'input-invalid'
				}`}
				onBlur={handleBlur}
				placeholder={props.placeholder}
				autoComplete="off"
				min={props.min}
			/>
			{!state.isValid && state.isTouched && (
				<small className="erorr-text">{props.errorText}</small>
			)}
		</div>
	);
}
