import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import Navbar from '../../shared/components/Navbar';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import Loading from '../../shared/components/Loading';
import ImageUpload from '../../shared/components/ImageUpload';
import cowImage from '../../shared/images/cowGrass.png';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttp } from '../../shared/hooks/http-hook';
import {
	REQUIRED,
	MIN_LENGTH,
	IS_DATE,
	IS_OVER,
	MAX_LENGTH
} from '../../utils/validators';
import {
	getTodaysDate,
	toFormatedDate,
	getDueDate,
	getCheckingDate
} from '../../utils/dates';
import Alert from '../../shared/components/Alert';

export default function AddCow() {
	const [isLoading, error, sendRequest] = useHttp();
	const [state, inputChangeHandler] = useForm(
		{
			tag: {
				value: '',
				isValid: false
			},
			name: {
				value: '',
				isValid: false
			},
			birthDate: {
				value: '',
				isValid: true
			},
			motherTag: {
				value: '',
				isValid: false
			},
			fertDate: {
				value: '',
				isValid: true
			},
			antibioticDate: {
				value: '',
				isValid: true
			},
			milk: {
				value: 0,
				isValid: true
			},
			image: {
				value: null,
				isValid: true
			}
		},
		false
	);
	const auth = useContext(AuthContext);
	const history = useHistory();

	const formSubmitHandler = async e => {
		e.preventDefault();

		const newCow = {
			tag: state.inputs.tag.value,
			name: state.inputs.name.value,
			bornOn:
				toFormatedDate(state.inputs.birthDate.value) || getTodaysDate(),
			mother: state.inputs.motherTag.value,
			fertDate: toFormatedDate(state.inputs.fertDate.value) || '',
			dueOn: getDueDate(state.inputs.fertDate.value) || '',
			children: [],
			checkingDates: getCheckingDate(state.inputs.fertDate.value),
			milk: state.inputs.milk.value || 0,
			antibioticDate: state.inputs.antibioticDate.value || ''
		};

		try {
			const formData = new FormData();
			formData.append('cow', JSON.stringify(newCow));
			formData.append('image', state.inputs.image.value);

			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/cows`,
				'POST',
				formData,
				{
					Authorization: `Bearer ${auth.token}`
				}
			);
			history.push('/cows');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<Navbar />
			{isLoading && <Loading />}
			{!isLoading && (
				<div className="container p-1">
					<form
						className="form my-4 p-2"
						onSubmit={formSubmitHandler}>
						<h1 className="center L-heading mb-1">
							Add <span className="text-primary">Cow</span>
						</h1>
						{error && <Alert message={error} type="error" />}
						<Input
							type="text"
							label="Tag"
							placeholder="Enter Tag..."
							name="tag"
							id="tag"
							validators={[MIN_LENGTH(4), MAX_LENGTH(20)]}
							errorText="Please Input A Valid Tag"
							onInput={inputChangeHandler}
						/>
						<Input
							type="text"
							label="Name"
							placeholder="Enter Name..."
							name="name"
							id="name"
							validators={[REQUIRED(), MAX_LENGTH(20)]}
							errorText="Please Input A Valid Name"
							onInput={inputChangeHandler}
						/>
						<Input
							type="text"
							label="Mother Tag"
							placeholder="Enter Tag of Mother..."
							name="motherTag"
							id="motherTag"
							validators={[MIN_LENGTH(4), MAX_LENGTH(20)]}
							errorText="Please Input A Valid Tag"
							onInput={inputChangeHandler}
						/>
						<p className="center my-1">
							The next fields can be left empty for automatic
							data.
						</p>
						<Input
							type="text"
							label="Birth Date"
							placeholder={`Enter Date (${getTodaysDate()})`}
							name="birthDate"
							id="birthDate"
							errorText="Please Input A Valid Birth Date"
							validators={[IS_DATE()]}
							notRequired
							onInput={inputChangeHandler}
							initialValid
						/>
						<Input
							type="text"
							label="Fertilization Date"
							placeholder="Enter Date..."
							name="fertDate"
							id="fertDate"
							validators={[IS_DATE()]}
							notRequired
							errorText="Please Input A Valid Fertilization Date (Leave Empty For None)"
							onInput={inputChangeHandler}
							initialValid
						/>
						<Input
							type="text"
							label="Antibiotic Date"
							placeholder="Enter Date ..."
							name="antibioticDate"
							id="antibioticDate"
							validators={[IS_DATE()]}
							notRequired
							errorText="Please Input A Valid Date (Leave Empty For None)"
							onInput={inputChangeHandler}
							initialValid
						/>
						<Input
							type="number"
							label="Liters Of Milk"
							placeholder="Enter Liters (0)"
							name="milk"
							id="milk"
							notRequired
							validators={[IS_OVER(-1)]}
							errorText="Please Input A Valid Number"
							onInput={inputChangeHandler}
							min="0"
							initialValid
						/>
						<ImageUpload id="image" onInput={inputChangeHandler} />
						<Button
							type="submit"
							block
							disabled={!state.isFormValid}
							color="primary"
							extraClasses="my-1">
							Add Cow
						</Button>
						<img
							src={cowImage}
							className="cow-img"
							alt="Cow Eating Grass"
						/>
					</form>
				</div>
			)}
		</div>
	);
}
