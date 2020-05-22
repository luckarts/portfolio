import express from 'express';
import migration from './Database/models';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import getResize from './helpers/resize';
import user_routes from './API/User/routes';
import gall_routes from './API/Gallery/routes';
import exp_Routes from './API/Experiences/routes';

import projects_Routes from './API/Projects/routes';
import path from 'path';
import passport from 'passport';

dotenv.config();
const app = express();

if (process.env.NODE_ENV === 'development') {
	// Log all requests to file, but errors to console
	app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false, parameterLimit: 1000000 }));
app.use(passport.initialize());
import './API/User/passport';
// Définition des CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

migration.connection
	.authenticate()
	.then(() => console.log('database connected...'))
	.catch((err) => console.log(`Error:${err}`));

app.use(express.static(path.join(__dirname + '/../public')));

// Index Rout
app.use('/api/users', user_routes);
app.use('/api/gallery', gall_routes);
app.use('/api/experiences', exp_Routes);
app.use('/api/projects', projects_Routes);
app.use('/thumb/img/:img', getResize);
app.get('/*/*', function(req, res) {
	res.redirect('/notFound');
});
app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../public/index.html'));
});

// error handler
app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res) => {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {},
	});
});

export default app;
