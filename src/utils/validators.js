export const REQUIRED = () => ({ type: 'REQUIRED' });
export const MIN_LENGTH = length => ({ type: 'MIN_LENGTH', length });
export const MAX_LENGTH = length => ({ type: 'MAX_LENGTH', length });
export const IS_EMAIL = () => ({ type: 'IS_EMAIL' });
export const IS_DATE = () => ({ type: 'IS_DATE' });
export const IS_OVER = num => ({ type: 'IS_OVER', num });

const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

export const validate = (value, validators) => {
	let isValid = true;
	validators.forEach(validator => {
		switch (validator.type) {
			case 'REQUIRED':
				isValid = isValid && value.trim().length > 0;
				break;
			case 'MIN_LENGTH':
				isValid = isValid && value.trim().length >= validator.length;
				break;
			case 'MAX_LENGTH':
				isValid = isValid && value.trim().length <= validator.length;
				break;
			case 'IS_EMAIL':
				isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
				break;
			case 'IS_DATE':
				isValid = isValid && dateRegex.test(value);
				break;
			case 'IS_OVER':
				isValid = isValid && Number(value) > validator.num;
				break;
			default:
				break;
		}
	});

	return isValid;
};
