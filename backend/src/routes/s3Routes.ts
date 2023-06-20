// s3Routes.ts
import { Router } from 'express';
import { uploadImage, getImage } from '../controllers/s3Controller';

const router = Router();

// Define the route for uploading an image
router.post('/upload', uploadImage);
router.get('/image/:key', getImage);
  

export default router;
