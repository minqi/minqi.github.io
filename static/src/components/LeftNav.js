require('../../stylesheets/main.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class LeftNav extends Component {

	render() {
		return (
			<div className='left-nav'>
				<div className='prof-photo'/>
				<div className='name'>Minqi Jiang</div>
				<ul className='links'>
					<li key='twitter'><div className='twitter-icon'/> <a href='twitter.com/minqijiang'>@MinqiJiang</a></li>
					<li key='email'><div className='email-icon'/> <span className='email'>msj at fb dot com</span></li>
				</ul>
			</div>
		)
	}
	
}

export default LeftNav;