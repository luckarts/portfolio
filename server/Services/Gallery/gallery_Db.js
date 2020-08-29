import db from '../../Database/models';
import Sequelize from 'sequelize';

export async function getGallery() {
	const gallery = db.Gallery.findAll();
	if (gallery) return gallery;
	return null;
}

export async function createGallery(arg) {
	const gallery = db.Gallery.create({
		image: arg.img,
	});
	if (gallery) return gallery;
	return null;
}
