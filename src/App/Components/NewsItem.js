import React, {Component} from 'react';
import url from 'url';
import moment from 'moment';
import './NewsItem.css';

const baseUrl = 'https://news.ycombinator.com';

class NewsItem extends Component {
	getDomain() {
		return url
			.parse(this.props.item.url)
			.hostname;
	}

	getCommentLink() {
		let commentText = 'discuss';
		if (this.props.item.kids && this.props.item.kids.length) {
			// This only counts top-level comments. To get the full count, recursively
			// get item details for this news item.
			commentText = this.props.item.kids.length + ' comments';
		}

		return (
			<a href={`${baseUrl}/item?id=${this.props.item.id}`}>{commentText}</a>
		);
	}

	getSubtext() {
		const howLong = moment
			.utc(this.props.item.time * 1000)
			.fromNow()

		return (
			<div className="newsItem-subtext">
				{this.props.item.score} points by <a href={`${baseUrl}/user?id=${this.props.item.by}`}>{this.props.item.by}</a> {howLong} | {this.getCommentLink()}
			</div>
		);
	}

	getTitle() {
    return (
      <div className="newsItem-title">
        <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
      </div>
    );
  }

	getRank() {
   return (
     <div className="newsItem-rank">
       {this.props.rank}.
     </div>
   );
 }

 getVote() {
   return (
     <div className="newsItem-vote">
       <a href={`${baseUrl}/vote?for=${this.props.item.id}&dir=up&whence=news`}>
         <img alt="Vote Arrow" src="/img/grayarrow2x.gif" width="10"/>
       </a>
     </div>
   );
 }

	render() {
		return (
			<div className="newsItem">
       {this.getRank()}
       {this.getVote()}
       <div className="newsItem-itemText">
         {this.getTitle()}
         {this.getSubtext()}
       </div>
     </div>
		);
	}
}

export default NewsItem
