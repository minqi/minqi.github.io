require('../../stylesheets/research.scss');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import parse from 'html-react-parser';

import papers from '../../data/papers.json';


class Research extends Component {

	_formatPaperAuthors(authors) {
		let formattedAuthors = [];
		for (var i = 0;  i < authors.length; i++) {
			let a = authors[i];
			let tokens = a.split(' ');
			let initials = tokens.slice(0,tokens.length - 1).reduce((accum, next) => accum + next[0], ''); 
			let surname = tokens[tokens.length - 1];
			let isBold = a.toLowerCase().startsWith('minqi jiang');

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

				let note = null;
				if (paper.hasOwnProperty('note')) {
					note = <div className='note'><div>↳ </div><div>{parse(paper['note'])}</div></div>
				}

				let listItem = (
					<li>
						<div className='title'><a target='__blank' href={paper.links.paper}>{paper.title}</a></div>
						<div className='authors'>{this._formatPaperAuthors(authors)}</div>
						<div className='publication'><span className='italic'>{paper.publication}</span>, {[paper.year]}</div>
						{note}
						<div className='links'>[{this._formatPaperLinks(paper.links)}]</div>
					</li>
				);

				paperListItems.push(listItem);
	    }
		}

		return <ul className='publications'>{paperListItems}</ul>;
	}

	_make_news_list() {

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
					I have the great fortune to be advised by <a target='__blank' href='https://rockt.github.io/'>Tim Rocktäschel</a> and <a target='__blank' href='https://www.egrefen.com/'>Edward Grefenstette</a> and to work with many other fantastic collaborators.
					</p>
				</div>

				<div className='section news'>
					<div className='section-header'>News</div>
					<p>
					Recently, I led the organization of the <a target='__blank' href='https://sites.google.com/view/aloe2022'>1st Workshop on Agent Learning in Open Endedness (ALOE) at ICLR 2022 🌱</a>, seeking to bridge ideas of open-ended evolution in ALife with open-ended learning in machine learning.
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