import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../../shared/components/Navbar';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import Loading from '../../shared/components/Loading';
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
	getCheckingDate,
	getTodaysDate,
	toFormatedDate
} from '../../utils/dates';
import Alert from '../../shared/components/Alert';
import AuthContext from '../../context/auth-context';
import ImageUpload from '../../shared/components/ImageUpload';
import placeholderImage from '../../shared/images/placeholderCow.png';

export default function EditCow() {
	const [foundCow, setFoundCow] = useState();
	const [isLoading, error, sendRequest] = useHttp();
	const [state, inputChangeHandler, setFormData] = useForm(
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
	const [showEditDetails, setShowEditDetails] = useState(false);
	const [gender, setGender] = useState('male');
	const auth = useContext(AuthContext);
	const history = useHistory();
	const { cowId } = useParams();

	useEffect(() => {
		const fetchCow = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/cows/${cowId}`,
					'GET',
					null,
					{
						Authorization: `Bearer ${auth.token}`
					}
				);

				const currentCow = responseData.cow;

				setFormData(
					{
						tag: {
							value: currentCow.tag,
							isValid: true
						},
						name: {
							value: currentCow.name,
							isValid: true
						},
						birthDate: {
							value: currentCow.bornOn,
							isValid: true
						},
						motherTag: {
							value: currentCow.mother,
							isValid: true
						},
						fertDate: {
							value: currentCow.fertDate,
							isValid: true
						},
						antibioticDate: {
							value: currentCow.antibioticDate,
							isValid: true
						},
						milk: {
							value: currentCow.milk,
							isValid: true
						},
						image: {
							value: null,
							isValid: true
						}
					},
					true
				);
				currentCow.gender && setGender(currentCow.gender);
				setFoundCow(currentCow);
			} catch (err) {
				console.error(err);
			}
		};

		fetchCow();
	}, [auth.token, cowId, sendRequest, setFormData]);

	const formSubmitHandler = async e => {
		e.preventDefault();

		const newCow = {
			...foundCow,
			tag: state.inputs.tag.value,
			name: state.inputs.name.value,
			bornOn:
				toFormatedDate(state.inputs.birthDate.value) || getTodaysDate(),
			mother: state.inputs.motherTag.value,
			fertDate: toFormatedDate(state.inputs.fertDate.value),
			antibioticDate: toFormatedDate(state.inputs.antibioticDate.value),
			milk: state.inputs.milk.value || 0,
			gender,
			checkingDates: getCheckingDate(state.inputs.fertDate.value)
		};

		try {
			const formData = new FormData();
			formData.append('cow', JSON.stringify(newCow));
			formData.append('image', state.inputs.image.value);

			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/cows/${cowId}`,
				'PATCH',
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
			{!foundCow && !isLoading && (
				<h1 className="center my-2">???? ?? ???????????????????? ??????????.</h1>
			)}
			{foundCow && !isLoading && (
				<div className="container p-1">
					<form
						className="form my-3 p-2"
						onSubmit={formSubmitHandler}>
						<h1 className="center L-heading mb-1">
							???????????????? <span className="text-primary">??????????</span>
						</h1>
						{error && <Alert message={error} type="error" />}
						<Input
							type="text"
							label="??????????????"
							placeholder="?????????? ??????????????..."
							name="tag"
							id="tag"
							validators={[MIN_LENGTH(4), MAX_LENGTH(20)]}
							errorText="???? ???????????? ?????????????? ???????????????? ??????????????"
							onInput={inputChangeHandler}
							initialValue={state.inputs.tag.value}
							initialValid={state.inputs.tag.isValid}
						/>
						<Input
							type="text"
							label="??????"
							placeholder="?????????? ??????..."
							name="name"
							id="name"
							validators={[REQUIRED(), MAX_LENGTH(20)]}
							errorText="???? ???????????? ?????????????? ???????????????? ??????"
							onInput={inputChangeHandler}
							initialValue={state.inputs.name.value}
							initialValid={state.inputs.name.isValid}
						/>
						<div className="radio-container center mb-2 mt-0-5">
							<label htmlFor="gender">??????</label>
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
									??????????
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
									????????????
								</label>
							</div>
						</div>
						{!showEditDetails && (
							<Button
								type="button"
								extraClasses="mb-2 border"
								onClick={() => setShowEditDetails(true)}
								style={{ margin: 'auto auto 2rem auto' }}>
								???????????????? ????????????
							</Button>
						)}
						{showEditDetails && (
							<React.Fragment>
								<Input
									type="text"
									label="?????????????? ???? ??????????"
									placeholder="?????????? ??????????????..."
									name="motherTag"
									id="motherTag"
									validators={[MIN_LENGTH(4), MAX_LENGTH(20)]}
									errorText="???? ???????????? ?????????????? ???????????????? ??????????????"
									onInput={inputChangeHandler}
									initialValue={state.inputs.motherTag.value}
									initialValid={
										state.inputs.motherTag.isValid
									}
								/>
								<Input
									type="text"
									label="???????? ???? ????????????"
									placeholder={`?????????? ???????? (${getTodaysDate()})`}
									name="birthDate"
									id="birthDate"
									errorText="???? ???????????? ?????????????? ???????????????? ????????"
									validators={[IS_DATE()]}
									notRequired
									onInput={inputChangeHandler}
									initialValid
									initialValue={state.inputs.birthDate.value}
								/>
								{gender === 'female' && (
									<Input
										type="text"
										label="???????? ???? ????????????????????"
										placeholder="?????????? ????????..."
										name="fertDate"
										id="fertDate"
										validators={[IS_DATE()]}
										notRequired
										errorText="???? ???????????? ?????????????? ???????????????? ????????"
										onInput={inputChangeHandler}
										initialValid
										initialValue={
											state.inputs.fertDate.value
										}
									/>
								)}
								<Input
									type="text"
									label="???????? ???? ????????????????????"
									placeholder="?????????? ????????..."
									name="antibioticDate"
									id="antibioticDate"
									validators={[IS_DATE()]}
									notRequired
									errorText="???? ???????????? ?????????????? ???????????????? ????????"
									onInput={inputChangeHandler}
									initialValid
									initialValue={
										state.inputs.antibioticDate.value
									}
								/>
								{gender === 'female' && (
									<Input
										type="number"
										label="?????????? ??????????"
										placeholder="?????????? ?????????? (0)"
										name="milk"
										id="milk"
										notRequired
										validators={[IS_OVER(-1)]}
										errorText="???? ???????????? ?????????????? ???????????????? ????????"
										onInput={inputChangeHandler}
										min="0"
										initialValid={state.inputs.milk.isValid}
										initialValue={state.inputs.milk.value}
									/>
								)}
								<ImageUpload
									id="image"
									onInput={inputChangeHandler}
									initialUrl={
										foundCow.image
											? `${process.env.REACT_APP_BACKEND_URL}/cows/image/${foundCow.image}`
											: placeholderImage
									}
								/>
							</React.Fragment>
						)}
						<Button
							type="submit"
							block
							disabled={!state.isFormValid}
							color="primary"
							extraClasses="my-1">
							???????????????? ??????????
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
