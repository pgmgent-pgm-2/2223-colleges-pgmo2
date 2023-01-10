/*
Import custom packages
*/
const dataService = require('../../services/dataService');
const { handleHTTPError } = require('../../utils');

/*
Get all users
*/
const getUsers = (req, res, next) => {
  try {
    // Get query parameters
    const { itemsPerPage, currentPage } = req.query;
    // Get users from service
    const users = dataService.getUsers(itemsPerPage, currentPage);
    // Send response
    res.status(200).json(users);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific user
*/
const getUserById = (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;
    // Get specific user from service
    const user = dataService.getUserById(userId);
    // Send response
    res.status(200).json(user);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

module.exports = {
  getUsers,
  getUserById,
};
