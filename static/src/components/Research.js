require('../../stylesheets/research.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import papers from '../../data/papers.json'


class Research extends Component {

	_formatPaperAuthors(authors) {
		let formattedAuthors = [];
		for (var i = 0;  i < authors.length; i++) {
			let a = authors[i];
			let tokens = a.split(' ');
			let initials = tokens.slice(0,tokens.length - 1).reduce((accum, next) => accum + next[0], ''); 
			let surname = tokens[tokens.length - 1];
			let isBold = a.toLowerCase() == 'minqi jiang';

			let separator = ', ';
			if (i == authors.length - 1) {
				separator = '';
			}

			formattedAuthors.push(<span className={classnames({bold: isBold})}>{initials} {surname}{separator}</span>);
		}

		return formattedAuthors;
	}

	_formatPaperLinks(links) {
		let formattedLinks = [];
		let numLinks = [Object.keys(links).length];

		var linkCount = 0;
		for (let key in links) {
			let url = links[key]
			let separator = '';
			if (linkCount < numLinks - 1) {
				separator = ', ';
			}
			formattedLinks.push(<span><a target='__blank' href={url}>{key}</a>{separator}</span>);
			linkCount++;
		}

		return formattedLinks;
	} 

	_make_publications_list() {
		// @todo: Load publications from JSON
		let paperListItems = [];
		for (var key in papers) {
			if (papers.hasOwnProperty(key)) {
				let paper = papers[key];

				let authors = [];
				let numAuthors =paper.authors.length;
				for (var i = 0; i < numAuthors; i++) {
					authors.push(paper.authors[i]);
				}

				let listItem = (
					<li>
						<div className='title'>{paper.title}</div>
						<div className='authors'>{this._formatPaperAuthors(authors)}</div>
						<div className='publication'><span className='italic'>{paper.publication}</span>, {[paper.year]}</div>
						<div className='links'>[{this._formatPaperLinks(paper.links)}]</div>
					</li>
				);

				paperListItems.push(listItem);
	    }
		}

		return <ul className='publications'>{paperListItems}</ul>;
	}

	render() {
		return (
			<div className='research-container'>
				<div className='section research-blurb'>
					<p>
					The rapid rise of computational power allows ever more capable AI agents to be trained in simulation. 
					A simulator, of course, does not fully reflect reality nor human preferences. 
					How can AI agents learn useful, human-aligned behaviors in simulation that transfer to new settings and people?
					</p>

					<p>
					I consider this question primarily in the setting of <span className='bold'>deep reinforcement learning</span>, 
					focusing on problems arising at the intersections of <span className='bold'>generalization</span>, <span className='bold'>human-AI coordination</span>, and <span className='bold'>open-ended systems</span>.
					</p>

					<p>
					I have the great fortune to be advised by <a target='__blank' href='https://rockt.github.io/'>Tim Rocktäschel</a> and <a target='__blank' href='https://www.egrefen.com/'>Edward Grefenstette</a>, as well as to work with other fantastic collaborators at UCL, Oxford, and FAIR.
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