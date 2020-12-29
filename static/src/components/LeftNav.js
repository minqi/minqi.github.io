require('../../stylesheets/main.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class LeftNav extends Component {

	render() {
		return (
			<div className='left-nav'>
				<div className='self-portrait'/>
				<div className='info'>
					<div className='name'>Minqi Jiang</div>
					<div className='job-title'>
					PhD student, University College London & Facebook AI Research
					</div>
					<ul className='links'>
						<li key='twitter'><div className='icon twitter-icon'/> <a target='__blank' href='https://www.twitter.com/minqijiang'>@MinqiJiang</a></li>
						<li key='github'><div className='icon git-icon'/> <a target='__blank' href='https://github.com/minqi'>GitHub</a></li>
						<li key='scholar' className='scholar-link'><div className='icon scholar-icon'/> <a target='__blank' href='https://scholar.google.com/citations?user=b7LglM0AAAAJ'>Google Scholar</a></li>
						<li key='email'><div className='icon email-icon'/> <span className='email'>msj at fb dot com</span></li>
					</ul>
				</div>
			</div>
		)
	}
	
}

export default LeftNav;