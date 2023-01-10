/*
Import packages
*/
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

/*
Import custom packages
*/
const { HTTPError, convertArrayToPagedObject } = require('../utils');

/*
File paths
*/
const filePathUsers = path.join(__dirname, '..', 'data', 'users.json');

/*
Read and write data
*/

const readDataFromUsersFile = () => {
  const data = fs.readFileSync(filePathUsers, { encoding: 'utf8', flag: 'r' });
  const users = JSON.parse(data);

  return users;
};



/*
Get all users
*/
const getUsers = (itemsPerPage, currentPage) => {
  try {
    // Read the posts.json file
    let users = readDataFromUsersFile();
    if (itemsPerPage && currentPage) {
      users = convertArrayToPagedObject(users, itemsPerPage, currentPage);
    }
    return users;
  } catch (error) {
    throw new HTTPError('Can\'t get users!', 500);
  }
};

/*
Get a specific user
*/
const getUserById = (id) => {
  try {
    // Read the users.json file
    const users = readDataFromUsersFile();
    // Find a specific user
    const user = users.find(u => u.id === id);
    if (!user) {
      throw new HTTPError(`Cant't find the user with id ${id}!`, 404);
    }
    return user;
  } catch (error) {
    throw error;
  }
};





module.exports = {
  getUsers,
  getUserById,
};
