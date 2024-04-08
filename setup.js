const fs = require('fs');
const path = require('path');

const structure = {
  'src/api/admin': ['admin.controller.js'],
  'src/api/guest': ['guest.controller.js'],
  'src/config': ['db.config.js'],
  'src/middleware': ['auth.js'],
  'src/models': ['User.js', 'Match.js', 'Player.js'],
  'src/routes': ['admin.routes.js', 'guest.routes.js'],
  'src/services': ['admin.service.js', 'guest.service.js'],
  'src/utils': ['errorHandler.js'],
  'src': ['app.js']
};

Object.keys(structure).forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });

  structure[dir].forEach(file => {
    const filePath = path.join(__dirname, dir, file);
    fs.closeSync(fs.openSync(filePath, 'w')); // This will create an empty file
  });
});

console.log('Project structure created successfully.');
