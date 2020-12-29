require('../../stylesheets/library.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import books from '../../data/books.json'


class Library extends Component {

	_make_book_list() {
		let bookListItems = [];
		for (let key in books) {
			if (books.hasOwnProperty(key)) {
				let book = books[key];

				let url = book.url;
				if (!url && book.pid) {
					url = 'https://www.amazon.com/dp/' + book.pid;
				};

				let isReading = book.date_read.length == 0;
				let isReadingMarker = ''
				if (isReading) {
					isReadingMarker = '*'
				} 

				let classNames = classnames({
					recommended: book.rating == '4.5',
					favorite: book.rating == '5'
				});

				let listItem = (
					<li className={classNames}>
						<span className='title'><a target='__blank' href={url}>{book.title}{isReadingMarker}</a></span>
					</li>
				);

				bookListItems.push(listItem);
			}
		}

		return <ul className='books'>{bookListItems}</ul>;
	}

	render() {
		return (
			<div className='library-container'>

				<div className='section preface'>
					This is a growing list of books I've read in the past few years. 
					Books I particularly enjoyed are highlighted in <span className='highlight-cyan'>cyan</span>, 
					while those I would consider among my favorite are highlighted in <span className='highlight-yellow'>yellow</span>. 
					An asterisk (*) marks those books I am currently reading.
				</div>

				{this._make_book_list()}
			</div>
		)
	}
	
}

export default Library;