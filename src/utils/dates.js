import moment from 'moment';

const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const DATE_FORMAT = 'DD.MM.YYYY';

export const getTodaysDate = () => {
	const todayDate = moment();

	return todayDate.format(DATE_FORMAT);
};

export const toFormatedDate = date => {
	if (!date || !dateRegex.test(date)) return;

	const dateObject = moment(date, DATE_FORMAT);

	return dateObject.format(DATE_FORMAT);
};

export const getDueDate = fertilizationDate => {
	if (!fertilizationDate || !dateRegex.test(fertilizationDate)) return;

	const dueDate = moment(fertilizationDate, DATE_FORMAT);

	dueDate.add(283, 'days');

	return dueDate.format(DATE_FORMAT);
};

export const getCheckingDate = fertilizationDate => {
	if (!fertilizationDate || !dateRegex.test(fertilizationDate))
		return {
			startDate: '',
			endDate: ''
		};

	const startDate = moment(fertilizationDate, DATE_FORMAT)
		.add(18, 'days')
		.format(DATE_FORMAT);
	const endDate = moment(fertilizationDate, DATE_FORMAT)
		.add(26, 'days')
		.format(DATE_FORMAT);

	return {
		startDate,
		endDate
	};
};

export const cowIsDue = (dueDate, date = getTodaysDate()) => {
	if (!dueDate || !dateRegex.test(dueDate)) return;

	date = moment(toFormatedDate(date), DATE_FORMAT);
	const startDueDate = moment(toFormatedDate(dueDate), DATE_FORMAT).subtract(
		10,
		'days'
	);
	const endDueDate = moment(toFormatedDate(dueDate), DATE_FORMAT).add(
		10,
		'days'
	);

	return (
		(date.isAfter(startDueDate) && date.isBefore(endDueDate)) ||
		date.isSame(startDueDate) ||
		date.isSame(endDueDate)
	);
};

export const cowShouldBeChecked = (
	startDate,
	endDate,
	date = getTodaysDate()
) => {
	startDate = moment(startDate, DATE_FORMAT);
	endDate = moment(endDate, DATE_FORMAT);
	date = moment(date, DATE_FORMAT);

	return (
		(date.isAfter(startDate) && date.isBefore(endDate)) ||
		date.isSame(startDate) ||
		date.isSame(endDate)
	);
};

export const dateIsAfter = (date1, date2) => {
	date1 = moment(date1, DATE_FORMAT);
	date2 = moment(date2, DATE_FORMAT);

	return date1.isAfter(date2);
};
