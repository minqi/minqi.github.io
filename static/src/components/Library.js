require('../../stylesheets/library.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


class Library extends Component {

	_make_reading_list() {
		// @todo: Load publications from JSON
		let items = []
		for (item in items) {
			
		}
	}

	render() {
		return (
			<div className='library-container'>
				{this._make_reading_list()}
			</div>
		)
	}
	
}

export default Library;