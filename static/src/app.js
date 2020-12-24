import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";

import reducers from './reducers';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import Research from './components/Research';
import Blog from './components/Blog';
import Library from './components/Library';

require('../stylesheets/main.scss');

const store = createStore(
	combineReducers({
		...reducers,
	}),
	applyMiddleware(
		reduxThunk, // lets us dispatch() functions
	)
);
const rootEl = document.getElementById('root');

const allRoutes = [
	<Route exact path='/' component={Research} />,
	<Route path='/research' component={Research} />,
	<Route path='/library' component={Library} />,
]

let TopNavWithRouter = withRouter(TopNav);

const render = () => ReactDOM.render(
	<Router>
		<Provider store={store}>
			<div className='app-container'>
				<LeftNav/>
				<div className='content-container'>
					<div className='content-view'>
						<TopNavWithRouter/>
						{allRoutes}
					</div>
				</div>
			</div>
		</Provider>
	</Router>,
  rootEl
);

render();
store.subscribe(render);