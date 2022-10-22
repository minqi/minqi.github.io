require('../../stylesheets/main.scss');

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class LeftNav extends Component {

  componentDidMount() {
  	this.selfPortrait = document.getElementById('self-portrait');
  	this.selfPortraitCache = document.getElementById('portrait-cache');

  	this.selfPortraitUrls = [];
  	let numPortraits = this.selfPortraitCache.childElementCount;
  	for (let i = 1; i <= numPortraits; i++) {
			var portrait = document.querySelector("#portrait-cache :nth-child(" + (i) + ")");
			let style = portrait.currentStyle || window.getComputedStyle(portrait, false);
			let url = style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
			this.selfPortraitUrls.push(url);
  	}

		let portraitShiftPerSecond = 10; // how many times to fire the event per second
		var portraitWait = false;
    this.selfPortrait.addEventListener('mousemove', (e) => {
    	if (!portraitWait) {
				let index = Math.floor(Math.random()*numPortraits);
				this.selfPortrait.style.backgroundImage = "url(" + this.selfPortraitUrls[index] + ")";

				portraitWait = true;

        setTimeout(function () {
            portraitWait = false;
        }, 1000 / portraitShiftPerSecond);
			}
    });
  }

  _generatePortraitCache() {
  	let portraitList = [];
  	for (let i = 0; i < 5; i++) {
  		portraitList.push((<li></li>));
  	}
  	return <ul id='portrait-cache'>{portraitList}</ul>; 
  }

	render() {
		return (
			<div className='left-nav'>
				<div id='self-portrait' className='self-portrait'/>
				
				{this._generatePortraitCache()}

				<div className='info'>
					<div className='name'>Minqi Jiang</div>
					<div className='job-title'>
					PhD student, University College London & Meta AI
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