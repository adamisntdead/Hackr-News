import React, {Component} from 'react';
import _ from 'lodash';
import './App.css';

import NewsItem from './Components/NewsItem';
import NewsHeader from './Components/NewsHeader';

class NewsList extends Component {
	getMore() {
		return (
			<div className="newsList-more">
				<a
					className="newsList-moreLink"
					href="https://news.ycombinator.com/news?p=2">More</a>
			</div>
		);
	}

	render() {
		return (
			<div className="newsList">
				<NewsHeader/>
				<div className="newsList-newsItems">
					{_(this.props.items)
						.map((item, index) => {
							return <NewsItem key={item.id} item={item} rank={index + 1}/>;
						})
						.value()}
				</div>
				{this.getMore()}
			</div>
		);
	}
}

export default NewsList
