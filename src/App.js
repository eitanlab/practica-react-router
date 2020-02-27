import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<nav className='nav'>
						<ul>
							<li><Link to='/users'>Users</Link></li>
							<li><Link to='/courses'>Courses</Link></li>
						</ul>
					</nav>
					<Switch>
						<Route path='/courses' component={Courses} />
						<Route exact path='/users' component={Users} />
						<Redirect from='/all-courses' to='/courses' />
						<Route render={() => <h1>Not found</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
