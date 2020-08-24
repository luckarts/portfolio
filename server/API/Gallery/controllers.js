import { getGallery, createGallery } from '../../Services/Gallery/gallery_Db';

export async function get_Gallery(req, res) {
	const gallery = await getGallery();
	if (gallery) {
		return res.status(200).json({ gallery });
	} else return null;
}

export async function create_Gallery(req, res) {
	let img = req.file;
	console.log(req.file);
	if (req.file) img = req.file.filename;

	const gallery = await createGallery({ img });
	if (gallery) {
		return res.status(200).json({ gallery });
	} else return null;
}
