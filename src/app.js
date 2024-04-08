// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.routes');
const guestRoutes = require('./routes/guest.routes');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(bodyParser.json());
app.use('/api/admin', adminRoutes);
app.use('/api/guest', guestRoutes);

// Global error handler
app.use((err, req, res, next) => {
  errorHandler.handleErrors(err);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
