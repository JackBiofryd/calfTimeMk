import React, { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { useAuth } from './shared/hooks/auth-hook';
import Loading from './shared/components/Loading';
import AuthContext from './context/auth-context';

const LandingPage = React.lazy(() => import('./shared/pages/LandingPage'));
const UserCows = React.lazy(() => import('./cows/pages/UserCows'));
const AddCow = React.lazy(() => import('./cows/pages/AddCow'));
const CowRelatives = React.lazy(() => import('./cows/pages/CowRelatives'));
const EditCow = React.lazy(() => import('./cows/pages/EditCow'));
const Login = React.lazy(() => import('./users/pages/Login'));
const SignUp = React.lazy(() => import('./users/pages/SignUp'));

function App() {
	const [token, userId, login, logout] = useAuth();

	let routes;
	if (token) {
		routes = (
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/cows">
					<UserCows />
				</Route>
				<Route exact path="/cows/new">
					<AddCow />
				</Route>
				<Route exact path="/cows/relatives/:cowId">
					<CowRelatives />
				</Route>
				<Route exact path="/cows/edit/:cowId">
					<EditCow />
				</Route>
				<Redirect to="/" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/signup">
					<SignUp />
				</Route>
				<Redirect to="/login" />
			</Switch>
		);
	}

	return (
		<div className="App">
			<AuthContext.Provider
				value={{ token, login, logout, userId, isLoggedIn: !!token }}>
				<Router>
					<Suspense
						fallback={
							<div className="center">
								<Loading />
							</div>
						}>
						{routes}
					</Suspense>
				</Router>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
