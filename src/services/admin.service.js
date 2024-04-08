// src/services/admin.service.js
const User = require('../models/User');

exports.createUser = async (userData) => {
  return await User.create(userData);
};

// Other service functions for reading, updating, and deleting users.
