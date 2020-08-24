import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { get_Gallery, create_Gallery } from './controllers';
import { upload } from '../../helpers/multer/upload';
import resize from '../../helpers/thumbnails';

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ message: 'welcome on Project api' });
});
router.get('/get/gallery', asyncHandler(get_Gallery));

router.post('/post/gallery', upload, asyncHandler(create_Gallery));

export default router;
