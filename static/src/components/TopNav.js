require('../../stylesheets/main.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TopNav extends Component {

	render() {
		// return (
		// 	<div className='top-nav'>
		// 		<ul className='menu-items'>
		// 			<li key='research'><a href='/'>Research</a></li>
		// 			<li key='essays'><a href='blog'>Essays</a></li>
		// 			<li key='software'><a href='software'>Software & Startups</a></li>
		// 			<li key='library'><a href='library'>Library</a></li>
		// 		</ul>
		// 	</div>
		return (
			<div className='top-nav'>
				<ul className='menu-items'>
					<li key='research'><a href='/'>Research</a></li>
					<li key='library'><a href='library'>Library</a></li>
				</ul>
			</div>
		)
	}
	
}

export default TopNav;