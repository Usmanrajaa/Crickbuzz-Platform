src/ # Source files for your application
│ ├── api/ # API route handlers and business logic
│ │ ├── admin/ # Admin-specific route handlers
│ │ │ └── admin.controller.js # Admin controllers (functions to handle requests)
│ │ └── guest/ # Guest-specific route handlers
│ │ └── guest.controller.js # Guest controllers
│ │
│ ├── config/ # Configuration files and environment variables
│ │ └── db.config.js # Database configuration
│ │
│ ├── middleware/ # Custom express middleware
│ │ └── auth.js # Authentication middleware
│ │
│ ├── models/ # Database models
│ │ ├── User.js # User model
│ │ ├── Match.js # Match model
│ │ └── Player.js # Player model
│ │
│ ├── routes/ # Express route definitions
│ │ ├── admin.routes.js # Routes for admin-related endpoints
│ │ └── guest.routes.js # Routes for guest-related endpoints
│ │
│ ├── services/ # Business logic and data manipulation
│ │ ├── admin.service.js# Services for admin functionality
│ │ └── guest.service.js# Services for guest functionality
│ │
│ ├── utils/ # Utility functions and helpers
│ │ └── errorHandler.js # Utility for error handling
│ │
│ └── app.js # Main application setup file

.gitignore # Specifies intentionally untracked files to ignore
package.json # Project metadata and dependencies
package-lock.json # Auto-generated, lockfile for npm versions
README.md # README for developers
