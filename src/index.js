import React from 'react';
import ReactDOM from 'react-dom';
import hn from './Helper/hn-client.js';
import eachAsync from 'each-async';

import App from './App/App';
import './index.css';

hn.getTopStories(stories => {
	let storyData = [];

	eachAsync(stories.slice(0, 30), function(id, index, done) {
		hn.getStory(id, (storyInfo) => {
			storyData.push(storyInfo);
			done();
		})
	}, function() {
		console.log(storyData)
		ReactDOM.render(
			<App items={storyData}/>, document.getElementById('root'));
	});
})



/*
items = [{
    "by": "jamesisaac",
    "id": 8805053,
    "kids": [8805325, 8805679, 8805195, 8805408, 8805681, 8805650, 8805643, 8805577, 8805469, 8805204, 8805222, 8805498, 8805190, 8805304, 8805569, 8805328, 8805478, 8805350, 8805186, 8805432, 8805318, 8805480, 8805320, 8805601, 8805106],
    "score": 167,
    "text": "",
    "time": 1419737448,
    "title": "Look, no hands",
    "type": "story",
    "url": "http://looknohands.me/"
},
....
]
*/
