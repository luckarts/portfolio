import multer from 'multer';
export const storage = multer.diskStorage({
	destination: function(req, file, next) {
		next(null, path.join(`${process.cwd()}/public/img`));
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname);
	},
});
const fileImgFilter = (req, file, cb) => {
	if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
		cb(null, true);
	} else {
		cb(null, false);
		return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
	}
};

export const upload = multer({
	storage: storage,
	limits: { file: 1024 * 1024 * 5 },
	fileFilter: fileImgFilter,
}).single('img');

export const fileFilter = (req, file, cb) => {
	if (file.mimetype == 'application/pdf') {
		cb(null, true);
	} else {
		cb(null, false);
		return cb(new Error('Only .pdf format allowed!'));
	}
};
