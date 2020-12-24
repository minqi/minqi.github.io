require('../../stylesheets/main.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TopNav extends Component {

	render() {
		return (
			<div className='top-nav'>
				<ul className='menu-items'>
					<li key='research'><a>Research</a></li>
					<li key='essays'><a href='blog'>Essays</a></li>
					<li key='software'>Software & Startups</li>
					<li key='library'>Library</li>
				</ul>
			</div>
		)
	}
	
}

export default TopNav;