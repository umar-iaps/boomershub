import express from 'express';
import bodyParser from 'body-parser';
import scrapingRoutes from './routes/scrapingRoutes';
import databaseRoutes from './routes/databaseRoutes';
import s3Routes from './routes/s3Routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/scraping', scrapingRoutes);
app.use('/database', databaseRoutes);
app.use('/s3', s3Routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
