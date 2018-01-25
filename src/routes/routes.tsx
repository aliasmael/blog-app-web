import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import LoginPage from '../containers/Login'
import DashboardPage from '../containers/Dashboard'

export const RouteMap = () => (
	<div>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" component={LoginPage} />
			<Route path="/dashboard" component={DashboardPage} />
			<Route component={Home} />
		</Switch>
	</div>
);