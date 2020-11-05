import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/home/HomeScreen';
import PlanetsScreen from './screens/planets/PlanetsScreen';
import PeopleScreen from './screens/people/PeopleScreen';
function App() {
	return (
		<Router>
			<div className='app'>
				<Navbar />
				<Switch>
					<Route path='/planets' component={PlanetsScreen} />
					<Route path='/people' component={PeopleScreen} />
					<Route path='/' component={HomeScreen} exact />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
