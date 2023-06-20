// scrapingRoutes.ts
import { Router } from 'express';
import { scrapeData } from '../controllers/scrapingController';

const router = Router();

// Define the route for scraping data
router.get('/scrape', scrapeData);

export default router;
