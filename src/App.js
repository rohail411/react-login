import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import home from './pages/home';
import Login from './pages/login';

function App() {
	return (
		<React.Fragment>
			<BrowserRouter basepath="/">
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/home" component={home} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
