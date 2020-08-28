# React Server Side Rendering Portfolio

What's included:

React Router
Redux & SAGA
React Helmet
Jest and react-testing-library
Tailwind Css with purge css unused
Webpack custom build the app
Docker-ized for production with multi-stage and compress Image sizes

# Features

PWA
Login user admin
Add new project
Edit Projects
Add new experience
Edit Experiences
Edit User admin and edit cv
Add new illustration

# Initial setup

npm install
Development
npm start
Start the dev server at http://localhost:3000
npm test
Start jest in watch mode
Production
npm run build && npm run start:prod
Bundle the JS and fire up the Express server for production
npm run docker
Build and start a local Docker image in production mode (mostly useful for debugging)
General architecture
This app has two main pieces: the server and the client code.
