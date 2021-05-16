import { useReducer, useCallback } from 'react';

const formReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			let formValidity = true;
			for (const inputId in state.inputs) {
				if (inputId === action.id) {
					formValidity = formValidity && action.isValid;
					continue;
				}

				formValidity = formValidity && state.inputs[inputId].isValid;
			}
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.id]: {
						value: action.value,
						isValid: action.isValid
					}
				},
				isFormValid: formValidity
			};
		case 'SET_DATA':
			return {
				...state,
				inputs: action.newInputs,
				isFormValid: action.newFormValidity
			};
		default:
			return state;
	}
};

export const useForm = (initialInputs, initialFormValidity) => {
	const [state, dispatch] = useReducer(formReducer, {
		inputs: initialInputs,
		isFormValid: initialFormValidity
	});

	const inputChangeHandler = useCallback(
		(id, value, isValid) =>
			dispatch({ type: 'CHANGE', id, value, isValid }),
		[]
	);

	const setFormData = useCallback(
		(newInputs, newFormValidity) =>
			dispatch({ type: 'SET_DATA', newInputs, newFormValidity }),
		[]
	);

	return [state, inputChangeHandler, setFormData];
};
