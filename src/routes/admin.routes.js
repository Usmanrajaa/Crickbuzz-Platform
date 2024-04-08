// src/routes/admin.routes.js
const express = require('express');
const router = express.Router();
const adminController = require('../api/admin/admin.controller');

router.post('/matches', adminController.createMatch);
// Other routes like PUT, DELETE for matches, etc.

module.exports = router;
