const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const newsJson = require('../data/news.json');

const filePathNews = path.join(__dirname, '..', 'data', 'news.json');

router.get('/', (request, response) => {
  response.status(200).json({
    message: 'Greetings',
  })
});

router.get('/posts', (request, response) => {
  response.status(200).json(newsJson);
});


router.get('/posts/:postId', (request, response) => {
  const {postId} = request.params;
  const post = newsJson.find(article => {
    return article.id === postId;
  });
  response.status(200).json(post);
});

router.post('/posts', (request, response)=> {
  const data = fs.readFileSync(filePathNews, {encoding: 'utf-8', flag: 'r'});
  const posts = JSON.parse(data);
  const post = request.body;
  post.id = uuidv4();
  post.createdAt = Date.now();
  post.publishedAt = Date.now();
  posts.push(post);
  fs.writeFileSync(filePathNews, JSON.stringify(posts, null, 2));
  response.status(200).json(post);
});

router.delete('/posts/:postId', (request, response) => {
  const {postId} = request.params;
  console.log(postId)
  const data = fs.readFileSync(filePathNews, {encoding: 'utf-8', flag: 'r'});
  const posts = JSON.parse(data);
  const foundIndex = posts.findIndex(post => post.id === postId);
  if(foundIndex !== -1){
    posts.splice(foundIndex, 1);
  }
  fs.writeFileSync(filePathNews, JSON.stringify(posts, null, 2));
  response.status(200).json({
    message: `Successfully deleted post with id ${postId}`
  });
});
module.exports = router;