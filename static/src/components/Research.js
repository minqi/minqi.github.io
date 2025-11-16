require("../../stylesheets/research.scss");

import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import parse from "html-react-parser";

import papers from "../../data/papers.json";

class Research extends Component {
  _formatPaperAuthors(authors) {
    let formattedAuthors = [];
    let isEqualContribution = false;
    for (var i = 0; i < authors.length; i++) {
      let a = authors[i];
      let tokens = a.split(" ");

      let keepFacsimile = tokens[0] == ">";
      let initials = tokens
        .slice(0, tokens.length - 1)
        .reduce((accum, next) => accum + next[0], "");
      let surname = tokens[tokens.length - 1];
      let isBold = a.toLowerCase().startsWith("minqi jiang");

      if (a[a.length - 1] == "*") {
        isEqualContribution = true;
      }

      let separator = ", ";
      if (i == authors.length - 1) {
        separator = "";
      }

      let equalContribution = "";
      if (isEqualContribution && i == authors.length - 1) {
        equalContribution = (
          <span className="equal"> (*Equal contribution)</span>
        );
      }

      if (keepFacsimile) {
        let facsimile = tokens.slice(1).join(" ");
        formattedAuthors.push(
          <span className={classnames({ bold: isBold })}>
            {facsimile}
            {separator}
            {equalContribution}
          </span>,
        );
      } else {
        formattedAuthors.push(
          <span className={classnames({ bold: isBold })}>
            {initials} {surname}
            {separator}
            {equalContribution}
          </span>,
        );
      }
    }

    return formattedAuthors;
  }

  _formatPaperLinks(links) {
    let formattedLinks = [];
    let numLinks = [Object.keys(links).length];

    var linkCount = 0;
    for (let key in links) {
      let url = links[key];
      let separator = "";
      if (linkCount < numLinks - 1) {
        separator = ", ";
      }
      formattedLinks.push(
        <span>
          <a target="__blank" href={url}>
            {key}
          </a>
          {separator}
        </span>,
      );
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
        let numAuthors = paper.authors.length;
        for (var i = 0; i < numAuthors; i++) {
          authors.push(paper.authors[i]);
        }

        let note = null;
        if (paper.hasOwnProperty("note")) {
          note = (
            <div className="note">
              <div>↳ </div>
              <div>{parse(paper["note"])}</div>
            </div>
          );
        }

        let listItem = (
          <li>
            <div className="title">
              <a target="__blank" href={paper.links.paper}>
                {paper.title}
              </a>
            </div>
            <div className="authors">{this._formatPaperAuthors(authors)}</div>
            <div className="publication">
              <span className="italic">{paper.publication}</span>,{" "}
              {[paper.year]}
            </div>
            {note}
            <div className="links">[{this._formatPaperLinks(paper.links)}]</div>
          </li>
        );

        paperListItems.push(listItem);
      }
    }

    return <ul className="publications">{paperListItems}</ul>;
  }

  render() {
    return (
      <div className="research-container">
        <div className="section research-blurb">
          <p>
            The rapid rise of computational power allows ever more capable AI
            agents to be trained in simulation. A simulator, of course, does not
            fully reflect reality nor human preferences. How can AI agents learn
            useful, human-aligned behaviors in simulation that transfer to new
            settings and people?
          </p>

          <p>
            I have considered this question from the lens of{" "}
            <span className="bold">generalization</span>,{" "}
            <span className="bold">human-AI collaboration</span>, and{" "}
            <span className="bold">open-ended learning</span> at Facebook AI
            Research, Google DeepMind, and Meta Superintelligence Labs.
            Recently, I have left the frontier labs to approach these problems
            from a different perspective.
          </p>
        </div>

        <div className="section news">
          <div className="section-header">News</div>
          <p>
            <span className="news-date">September 2025:</span> I have left Meta
            Superintelligence Labs to focus on a new project.
          </p>
        </div>

        <div className="section publications-container">
          <div className="section-header">Select works </div>
          {this._make_publications_list()}
        </div>
      </div>
    );
  }
}

export default Research;
