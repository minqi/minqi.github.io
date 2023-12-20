require('../../stylesheets/research.scss');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import parse from 'html-react-parser';

import papers from '../../data/papers.json';


class Research extends Component {

	_formatPaperAuthors(authors) {
		let formattedAuthors = [];
		let isEqualContribution = false;
		for (var i = 0;  i < authors.length; i++) {
			let a = authors[i];
			let tokens = a.split(' ');
			let initials = tokens.slice(0,tokens.length - 1).reduce((accum, next) => accum + next[0], ''); 
			let surname = tokens[tokens.length - 1];
			let isBold = a.toLowerCase().startsWith('minqi jiang');

			if (a[a.length-1] == '*') {
				isEqualContribution = true;
			}

			let separator = ', ';
			if (i == authors.length - 1) {
				separator = '';
			}

			let equalContribution = '';
			if (isEqualContribution && i == authors.length-1) {
				equalContribution = (<span className="equal"> (*Equal contribution)</span>);
			}

			formattedAuthors.push(<span className={classnames({bold: isBold})}>{initials} {surname}{separator}{equalContribution}</span>);
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
					I consider this question from the lens of <span className='bold'>generalization</span>, <span className='bold'>human-AI coordination</span>, and <span className='bold'>open-ended learning</span>, as part of the Autonomous Assistants team at Google DeepMind.
					</p>
				</div>

				<div className='section news'>
					<div className='section-header'>News</div>
					<p>
					<span className='news-date'>Dec 2023:</span> Co-organized the <a target='__blank' href='https://sites.google.com/view/aloe2023'>2nd Workshop on Agent Learning in Open Endedness (ALOE) at NeurIPS 2023 🌱</a>, seeking to bridge ideas of open-ended evolution in ALife with self-supervised machine learning. The event was a lot of fun and drew out a <a target='__blank' href='https://twitter.com/aloeworkshop/status/1735898465580810548'>special community</a> of researchers.
					</p>

					<p>
					<span className='news-date'>Dec 2023:</span> Joined DeepMind as a Research Scientist.
					</p>

					<p>
					<span className='news-date'>Nov 2023:</span> Released <a target='__blank' href="https://github.com/facebookresearch/minimax">minimax</a>, a library for rapid experimentation with autocurricula methods for RL in JAX, including new parallelized and multi-GPU/TPU versions of PLR and ACCEL.
					</p>

					<p>
					<span className='news-date'>Sep 2023:</span> Became a Doctor (of computers). You can find <a target='__blank' href="https://arxiv.org/abs/2312.03126">my dissertation on arXiv</a>.
					</p>
				</div>

				<div className='section publications-container'>
					<div className='section-header'>Select works </div>
					{this._make_publications_list()}
				</div>
			</div>
		)
	}
	
}

export default Research;