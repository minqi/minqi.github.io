require('../../stylesheets/research.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import papers from '../../data/papers.json'


class Research extends Component {

	_make_publications_list() {
		// @todo: Load publications from JSON
		let papers = []
		for (paper in papers) {
			
		}
	}

	render() {
		return (
			<div className='research-container'>
				<div className='section research-blurb'>
					<p>
					The rapid rise of computational power allows ever more capable AI agents to be trained in simulation. 
					A simulator, of course, does not fully reflect reality nor human preferences. 
					My research interests center on the grand challenge of human-centric generalization: 
					How can AI agents learn useful, human-aligned behaviors that transfer to new settings and people?
					</p>

					<p>
					I consider this question primarily in the setting of deep reinforcement learning, 
					focusing on problems arising at the intersection of generalization, human-AI coordination, and open-ended systems.
					</p>

					<p>
					I have the great fortune to be advised by Tim Rocktäschel and Edward Grefenstette 
					and to work with other fantastic collaborators at UCL, Oxford, and FAIR.
					</p>
				</div>

				<div className='section publications-container'>
					<div className='section-header'>Recent works</div>
					{this._make_publications_list()}
				</div>
			</div>
		)
	}
	
}

export default Research;