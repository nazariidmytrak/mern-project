import * as dotenv from 'dotenv';

import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { logger, logEvents } from './middleware/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import corsOptions from './config/corsOptions.js';
import connectDB from './config/dbConnection.js';

import userRouter from './routes/userRoutes.js';
import noteRouter from './routes/noteRoutes.js';
import rootRouter from './routes/root.js';

dotenv.config();

const PORT = process.env.PORT || 3500;
console.log(process.env.NODE_ENV);
connectDB();

const app = express();

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(express.static('public'));
/* app.use('/', express.static(path.join(__dirname, 'public'))); */
app.use('/', rootRouter);
app.use('/users', userRouter);
app.use('/notes', noteRouter);

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});
app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});

mongoose.connection.on('error', (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log'
  );
});
