import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';
import Navbar from '../../shared/components/Navbar';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import Alert from '../../shared/components/Alert';
import Loading from '../../shared/components/Loading';
import cowImage from '../../shared/images/cowGrass.png';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttp } from '../../shared/hooks/http-hook';
import { MIN_LENGTH, IS_EMAIL, MAX_LENGTH } from '../../utils/validators';

export default function Login() {
	const [isLoading, error, sendRequest] = useHttp();
	const [state, inputChangeHandler] = useForm(
		{
			password: {
				value: '',
				isValid: false
			},
			email: {
				value: '',
				isValid: false
			}
		},
		false
	);
	const auth = useContext(AuthContext);

	const formSubmitHandler = async e => {
		e.preventDefault();

		try {
			const responseData = await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/users/login`,
				'POST',
				JSON.stringify({
					password: state.inputs.password.value,
					email: state.inputs.email.value
				}),
				{
					'Content-Type': 'application/json'
				}
			);

			auth.login(responseData.user.id, responseData.token);
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
						className="form my-3 p-2"
						onSubmit={formSubmitHandler}>
						<h1 className="center L-heading mb-1">
							Лоригај <span className="text-primary">Се</span>
						</h1>
						{error && <Alert message={error} type="error" />}
						<Input
							type="email"
							label="Е-маил"
							placeholder="Внеси Е-маил..."
							name="email"
							id="email"
							validators={[IS_EMAIL(), MAX_LENGTH(50)]}
							errorText="Ве молиме внесете правилен е-маил"
							onInput={inputChangeHandler}
						/>
						<Input
							type="password"
							label="Лозинка"
							placeholder="Внеси Лозинка..."
							name="password"
							id="password"
							validators={[MIN_LENGTH(6), MAX_LENGTH(300)]}
							errorText="Ве молиме внесете правилна лозика (над 6 карактери)"
							onInput={inputChangeHandler}
						/>
						<Button
							type="submit"
							block
							disabled={!state.isFormValid}
							color="primary"
							extraClasses="my-1">
							Лоригај Се
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
