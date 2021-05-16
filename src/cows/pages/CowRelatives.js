import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../shared/components/Navbar';
import CowItem from '../components/CowItem';
import Alert from '../../shared/components/Alert';
import Loading from '../../shared/components/Loading';
import { useHttp } from '../../shared/hooks/http-hook';
import AuthContext from '../../context/auth-context';

export default function CowRelatives() {
	const [currentCow, setCurrentCow] = useState();
	const [mother, setMother] = useState();
	const [children, setChildren] = useState();
	const { cowId } = useParams();
	const [isLoading, error, sendRequest] = useHttp();
	const auth = useContext(AuthContext);

	useEffect(() => {
		const fetchCowRelatives = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/cows/relatives/${cowId}`,
					'GET',
					null,
					{
						Authorization: `Bearer ${auth.token}`
					}
				);
				setCurrentCow(responseData.currentCow);
				setMother(responseData.mother);
				setChildren(responseData.children);
			} catch (err) {
				console.error(err);
			}
		};

		fetchCowRelatives();
	}, [auth.token, cowId, sendRequest]);

	return (
		<div>
			<Navbar />
			{isLoading && <Loading />}
			{error && (
				<div className="container my-1">
					<Alert type="error" message={error} />
				</div>
			)}
			{!isLoading && !error && (
				<div className="container my-4 center">
					<div className="mx-1">
						<h1>Current Cow: </h1>
						{!currentCow && (
							<p className="lead mb-2">No cow found.</p>
						)}
						{currentCow && (
							<CowItem
								key={currentCow.id}
								id={currentCow.id}
								name={currentCow.name}
								tag={currentCow.tag}
								fertDate={currentCow.fertDate}
								dueOn={currentCow.dueOn}
								bornOn={currentCow.bornOn}
								image={currentCow.image}
								mother={currentCow.mother}
								children={currentCow.children}
								displayOnly
							/>
						)}
						<h1>Mother: {currentCow && currentCow.mother}</h1>
						{!mother && (
							<p className="lead mb-2">No mother cow found.</p>
						)}
						{mother && (
							<CowItem
								key={mother.id}
								id={mother.id}
								name={mother.name}
								tag={mother.tag}
								fertDate={mother.fertDate}
								dueOn={mother.dueOn}
								bornOn={mother.bornOn}
								image={mother.image}
								mother={mother.mother}
								children={mother.children}
								displayOnly
							/>
						)}
						<h1>Children: {children && children.length}</h1>
						{children &&
							children.length !== 0 &&
							children.map(cow => (
								<CowItem
									key={cow.id}
									id={cow.id}
									name={cow.name}
									tag={cow.tag}
									fertDate={cow.fertDate}
									dueOn={cow.dueOn}
									bornOn={cow.bornOn}
									image={cow.image}
									mother={cow.mother}
									children={cow.children}
									displayOnly
								/>
							))}
					</div>
				</div>
			)}
		</div>
	);
}
