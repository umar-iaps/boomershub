// databaseRoutes.ts
import { Router } from 'express';
import { getProperty, searchProperties, getImage } from '../controllers/databaseController';

const router = Router();

// Define the route for getting a property
router.get('/property/:id', getProperty);

router.get('/image/:id', getImage);

// Define the route for searching properties
router.get('/properties/search', searchProperties);

export default router;
