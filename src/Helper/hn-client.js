import $ from 'jquery';

const baseUrl = 'https://hacker-news.firebaseio.com/v0'

module.exports.getTopStories = (callback) => {
  $.ajax({
    url: `${baseUrl}/topstories.json`,
    dataType: 'json',
    cache: true
  }).then(stories => {
    callback(stories)
  });
}

module.exports.getStory = (id, callback) => {
  $.ajax({
      url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
      dataType: 'json',
      cache: true
  }).then(story => {
    callback(story)
  })
}
