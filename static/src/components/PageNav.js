require('../../stylesheets/main.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


class PageNavLink extends Component {
	static propTypes = {
		location: PropTypes.object,
		path: PropTypes.string,
		regexPath: PropTypes.object,
	};

  static defaultProps = {
  	location: '/',
  	path: '',
  	regexPath: null
  };		

  _onClick() {
  	this.props.history.push(this.props.path)
  }

	render() {
		let isSelected = false;
		let currentPath = this.props.location.pathname.toLowerCase();
		if (this.props.regexPath) {
			isSelected = this.props.regexPath.test(currentPath);
		}
		else if (this.props.path) {
			isSelected = currentPath == this.props.path;
		}

		let classNames = classnames({
			'page-nav-link': true,
			'selected': isSelected,
		});

		return (
			<div className={classNames} onClick={this._onClick.bind(this)}>	
				{this.props.children}
				<div className='underline'/>
			</div>
		)
	}
}

class PageNav extends Component {

	static propTypes = {
		location: PropTypes.object,
  }

	render() {
		let history = this.props.history
		let location = this.props.location
		return (
			<div className='page-nav'>
				<ul className='menu-items'>
					<li key='research'>
						<PageNavLink 
							history={history} 
							location={location} 
							path='/research' 
							regexPath={/(^\/$)|(^\/research$)/}>
							Research
						</PageNavLink>
					</li>
					<li key='library'>
						<PageNavLink 
							history={history}
							location={location} 
							path='/library'>
							Library
						</PageNavLink>
					</li>
				</ul>

				<a href="https://blog.minch.co" target="__blank"><div key='blog' className='page-nav-link' id='blog-btn'>↳ Blog</div></a>
			</div>
		)
	}
	
}

export default PageNav;