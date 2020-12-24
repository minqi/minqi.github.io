require('../../stylesheets/blog.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


class Blog extends Component {

	_load_blog_posts() {
		// @todo: Load publications from JSON
		for (item in items) {
			
		}
	}

	render() {
		return (
			<div className='blog_container'>
				{this._load_blog_posts()}
			</div>
		)
	}
	
}

export default Blog;