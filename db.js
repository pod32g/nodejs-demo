const users = require('./build/models/Users');
const posts = require('./build/models/Posts');

users.Users.createTable();
posts.Posts.createTable();