import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../shared/components/Navbar';
import CowsList from '../components/CowsList';
import Alert from '../../shared/components/Alert';
import AuthContext from '../../context/auth-context';
import { useHttp } from '../../shared/hooks/http-hook';
import Loading from '../../shared/components/Loading';

export default function UserCows() {
	const auth = useContext(AuthContext);
	const [isLoading, error, sendRequest] = useHttp();
	const [cows, setCows] = useState();
	const [dueNum, setDueNum] = useState(0);
	const [checkingNum, setCheckingNum] = useState(0);
	const [filteredCows, setFilteredCows] = useState();

	useEffect(() => {
		const fetchCows = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/cows/user`,
					'GET',
					null,
					{
						Authorization: `Bearer ${auth.token}`
					}
				);
				setCows(responseData.cows);
				setDueNum(responseData.dueCowsNum);
				setCheckingNum(responseData.checkingCowsNum);
			} catch (err) {
				console.error(err);
			}
		};

		fetchCows();
	}, [auth.token, auth.userId, sendRequest]);

	const handleCowDelete = async id => {
		try {
			await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/cows/${id}`,
				'DELETE',
				null,
				{
					Authorization: `Bearer ${auth.token}`
				}
			);
		} catch (err) {
			console.error(err);
		}

		try {
			const responseData = await sendRequest(
				`${process.env.REACT_APP_BACKEND_URL}/cows/user`,
				'GET',
				null,
				{
					Authorization: `Bearer ${auth.token}`
				}
			);
			setCows(responseData.cows);
			setDueNum(responseData.dueCowsNum);
			setCheckingNum(responseData.checkingCowsNum);
		} catch (err) {
			console.error(err);
		}
	};

	const filterCows = e => {
		const cowsFilteredByTag = cows.filter(
			cow =>
				cow.tag.includes(e.target.value) ||
				cow.name.includes(e.target.value)
		);
		setFilteredCows(cowsFilteredByTag);
	};

	return (
		<React.Fragment>
			<Navbar />
			{isLoading && <Loading />}
			{error && (
				<div className="container my-2">
					<Alert type="error">{error}</Alert>
				</div>
			)}
			{!error && !isLoading && (
				<div className="container">
					{cows && cows.length !== 0 && (
						<div className="btn-container my-2">
							<input
								type="text"
								placeholder="Search By Tag or Name..."
								className="input my-0-5 mx-1-5"
								onChange={e => filterCows(e)}
							/>
							<Link to="/cows/new">
								<div className="btn-circle-plus"></div>
							</Link>
						</div>
					)}
					{cows && (dueNum !== 0 || checkingNum !== 0) && (
						<div className="container px-1">
							<Alert
								message={`There ${
									dueNum === 1
										? `is ${dueNum} cow`
										: `are ${dueNum} cows`
								} soon due and ${checkingNum} ${
									checkingNum === 1 ? 'cow' : 'cows'
								} should be checked`}
								type="info"
							/>
						</div>
					)}
					<CowsList
						cows={filteredCows || cows}
						onDelete={handleCowDelete}
					/>
				</div>
			)}
		</React.Fragment>
	);
}
