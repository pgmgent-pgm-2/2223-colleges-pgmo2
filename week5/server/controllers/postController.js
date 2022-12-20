const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const newsJson = require('../data/news.json');

const filePathNews = path.join(__dirname, '..', 'data', 'news.json');

const getPosts = (request, response) => {
  response.status(200).json(newsJson);
};

const getPostById = (request, response) => {
  const { postId } = request.params;
  const post = newsJson.find((article) => article.id === postId);
  response.status(200).json(post);
};

const createPost = (request, response) => {
  const data = fs.readFileSync(filePathNews, { encoding: 'utf-8', flag: 'r' });
  const posts = JSON.parse(data);
  const post = request.body;
  post.id = uuidv4();
  post.createdAt = Date.now();
  post.publishedAt = Date.now();
  posts.push(post);
  fs.writeFileSync(filePathNews, JSON.stringify(posts, null, 2));
  response.status(200).json(post);
};
const deletePostById = (request, response) => {
  const { postId } = request.params;
  const data = fs.readFileSync(filePathNews, { encoding: 'utf-8', flag: 'r' });
  const posts = JSON.parse(data);
  const foundIndex = posts.findIndex((post) => post.id === postId);
  if (foundIndex !== -1) {
    posts.splice(foundIndex, 1);
  }
  fs.writeFileSync(filePathNews, JSON.stringify(posts, null, 2));
  response.status(200).json({
    message: `Successfully deleted post with id ${postId}`,
  });
};

const updatePostById = (request, response) => {
  const { postId } = request.params;
  const post = request.body;
  post.modifiedAt = Date.now();
  const data = fs.readFileSync(filePathNews, { encoding: 'utf-8', flag: 'r' });
  const posts = JSON.parse(data);
  const foundIndex = posts.findIndex((postElement) => postElement.id === postId);
  if (foundIndex !== -1) {
    posts[foundIndex] = {
      ...posts[foundIndex],
      ...post,
    };
  }
  fs.writeFileSync(filePathNews, JSON.stringify(posts, null, 2));
  response.status(200).json({
    message: `Successfully updated post with id ${postId} and ${JSON.stringify(posts[foundIndex], null, 2)}`,
  });
};
module.exports = {
  getPosts, updatePostById, deletePostById, createPost, getPostById,
};
