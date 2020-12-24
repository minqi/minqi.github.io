require('../../stylesheets/research.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import papers from '../../data/papers.json'


class Research extends Component {

	_make_publications_list() {
		// @todo: Load publications from JSON
		for (paper in papers) {

		}
	}

	render() {
		return (
			<div className='research-container'>
				{this._make_publications_list()}

				This is my research
			</div>
		)
	}
	
}

export default Research;