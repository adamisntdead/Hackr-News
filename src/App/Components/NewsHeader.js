import React, {Component} from 'react';
import _ from 'lodash';
import './NewsHeader.css';

class NewsHeader extends Component {
	getLogo() {
    return (
      <div className="newsHeader-logo">
        <a href="https://www.ycombinator.com"><img alt="Logo" src="/img/y18.gif"/></a>
      </div>
    );
  }

  getTitle() {
    return (
      <div className="newsHeader-title">
        <a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
      </div>
    );
  }

  getNav() {
    const navLinks = [
      {
        name: 'new',
        url: 'newest'
      },
      {
        name: 'comments',
        url: 'newcomments'
      },
      {
        name: 'show',
        url: 'show'
      },
      {
        name: 'ask',
        url: 'ask'
      },
      {
        name: 'jobs',
        url: 'jobs'
      },
      {
        name: 'submit',
        url: 'submit'
      }
    ];

    return (
      <div className="newsHeader-nav">
        {_(navLinks).map(function (navLink) {
          return (
            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={`https://news.ycombinator.com/${navLink.url}`}>
              {navLink.name}
            </a>
          );
        }).value()}
      </div>
    );
  }

  getLogin() {
    return (
      <div className="newsHeader-login">
        <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?whence=news">login</a>
      </div>
    );
  }

	render() {
		return (
      <div className="newsHeader">
        {this.getLogo()}
        {this.getTitle()}
        {this.getNav()}
        {this.getLogin()}
      </div>
		);
	}
}

export default NewsHeader
