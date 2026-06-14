import express from 'express';
import connectDB from './DB.js';
import adminRouter from './routes/adminRoute.js'
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/cms', adminRouter);

connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});