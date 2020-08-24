import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { getAllProjects, getProjectByName,getProjectsByTag,create_Project, update_Project } from './controllers';
import { upload } from '../../helpers/multer/upload';
const router = express.Router();
import { jwtDecode } from '../../helpers/jwtDecode';

router.get('/get/projects', asyncHandler(getAllProjects));
router.get('/get/projects/:tag', asyncHandler(getProjectsByTag));
router.get('/get/project/:ProjectName', asyncHandler(getProjectByName));
router.use(jwtDecode);
router.post('/post/project', upload, asyncHandler(create_Project));
router.put('/update/:id', upload, asyncHandler(update_Project));

export default router;
