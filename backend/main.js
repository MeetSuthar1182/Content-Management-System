import express from 'express';
import connectDB from './DB.js';
import adminRouter from './routes/adminRoute.js'
import cors from 'cors';
import process from "node:process";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/cms', adminRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();