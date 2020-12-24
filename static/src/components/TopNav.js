require('../../stylesheets/main.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TopNav extends Component {

	render() {
		return (
			<div className='top-nav'>
				<ul className='menu-items'>
					<li>Research</li>
					<li>Essays</li>
					<li>Software & Startups</li>
					<li>Library</li>
				</ul>
			</div>
		)
	}
	
}

export default TopNav;