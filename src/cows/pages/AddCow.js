import React, { useContext, useState } from 'react';
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
				isValid: true
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
	const [showAddDetails, setShowAddDetails] = useState(false);
	const [gender, setGender] = useState('male');
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
			antibioticDate: state.inputs.antibioticDate.value || '',
			gender
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

	const genderChangeHandler = e => setGender(e.target.value);

	return (
		<div>
			<Navbar />
			{isLoading && <Loading />}
			{!isLoading && (
				<div className="container p-1">
					<form
						className="form my-3 p-2"
						onSubmit={formSubmitHandler}>
						<h1 className="center L-heading mb-1">
							Додај <span className="text-primary">Крава</span>
						</h1>
						{error && <Alert message={error} type="error" />}
						<Input
							type="text"
							label="Маркица"
							placeholder="Внеси Маркица..."
							name="tag"
							id="tag"
							validators={[MIN_LENGTH(4), MAX_LENGTH(20)]}
							errorText="Ве молиме внесете правилна маркица"
							onInput={inputChangeHandler}
						/>
						<Input
							type="text"
							label="Име"
							placeholder="Внеси Име..."
							name="name"
							id="name"
							validators={[REQUIRED(), MAX_LENGTH(20)]}
							errorText="Ве молиме внесете правилно име"
							onInput={inputChangeHandler}
						/>
						<div className="radio-container center mb-2 mt-0-5">
							<label htmlFor="gender">Пол</label>
							<div className="radio-inputs">
								<label>
									<input
										type="radio"
										name="gender"
										id="gender"
										value="male"
										checked={gender === 'male'}
										onChange={genderChangeHandler}
									/>{' '}
									Машко
								</label>
								<label>
									<input
										type="radio"
										name="gender"
										id="gender"
										value="female"
										checked={gender === 'female'}
										onChange={genderChangeHandler}
									/>{' '}
									Женско
								</label>
							</div>
						</div>
						{!showAddDetails && (
							<Button
								type="button"
								extraClasses="mb-2 border"
								onClick={() => setShowAddDetails(true)}
								style={{ margin: 'auto auto 2rem auto' }}>
								Додај детали
							</Button>
						)}
						{showAddDetails && (
							<React.Fragment>
								<Input
									type="text"
									label="Маркица на Мајка"
									placeholder="Внеси Маркица..."
									name="motherTag"
									id="motherTag"
									validators={[MIN_LENGTH(4), MAX_LENGTH(20)]}
									errorText="Ве молиме внесете правилна маркица"
									notRequired
									onInput={inputChangeHandler}
									initialValid
								/>
								<Input
									type="text"
									label="Дата на Раѓање"
									placeholder={`Внеси Дата (${getTodaysDate()})`}
									name="birthDate"
									id="birthDate"
									errorText="Ве молиме внесете правилна дата"
									validators={[IS_DATE()]}
									notRequired
									onInput={inputChangeHandler}
									initialValid
								/>
								{gender === 'female' && (
									<Input
										type="text"
										label="Дата на Оплодување"
										placeholder="Внеси Дата..."
										name="fertDate"
										id="fertDate"
										validators={[IS_DATE()]}
										notRequired
										errorText="Ве молиме внесете правилна дата"
										onInput={inputChangeHandler}
										initialValid
									/>
								)}
								<Input
									type="text"
									label="Дата на антибиотик"
									placeholder="Внеси Дата..."
									name="antibioticDate"
									id="antibioticDate"
									validators={[IS_DATE()]}
									notRequired
									errorText="Ве молиме внесете правилна дата"
									onInput={inputChangeHandler}
									initialValid
								/>
								{gender === 'female' && (
									<Input
										type="number"
										label="Литри млеко"
										placeholder="Внесете Литри Млеко (0)"
										name="milk"
										id="milk"
										notRequired
										validators={[IS_OVER(-1)]}
										errorText="Ве молиме внесете правилен број"
										onInput={inputChangeHandler}
										min="0"
										initialValid
									/>
								)}
								<ImageUpload
									id="image"
									onInput={inputChangeHandler}
								/>
							</React.Fragment>
						)}
						<Button
							type="submit"
							block
							disabled={!state.isFormValid}
							color="primary"
							extraClasses="my-1">
							Додај Крава
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
