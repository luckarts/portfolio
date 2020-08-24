import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { signup } from './auth_controller/signup';
import path from 'path';
import { update, getUser } from './auth_controller/update';
import passport from 'passport';
import authenticate from './authenticate';
import { generateJWT } from '../../Services/User/User_Services';
import { fileFilter } from '../../helpers/multer/upload';
import { jwtDecode } from '../../helpers/jwtDecode';

import multer from 'multer';
const router = express.Router();
console.log(path.join(`${process.cwd()}/public`));
const storage = multer.diskStorage({
	destination: function(req, file, next) {
		next(null, path.join(`${process.cwd()}/public/upload`));
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname);
	},
});
const upload = multer({
	storage: storage,
}).single('cv');

router.post('/signup', asyncHandler(signup));
router.post(
	'/signin',
	passport.authenticate('local', {
		failWithError: true,
		failureFlash: true,
		session: false,
	}),
	function(req, res, err) {
		if (req.user.err) {
			return res.status(401).send({ error: req.user.err });
		}
		const token = generateJWT(req.user);
		res.status(200).json({ user: req.user, token });
	},
	function(err, req, res, next) {
		return res.status(401).send({ error: err });
	}
);
router.get('/user', asyncHandler(getUser));

router.put('/update', upload, asyncHandler(update));

router.get('/me', authenticate, (req, res) => {
	try {
		res.json(req.user);
	} catch (e) {
		localStorage.clear();
		res.status(500).json({ error: 'signUp failed' });
	}
});
export default router;
