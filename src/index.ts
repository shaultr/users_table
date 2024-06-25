import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connect}  from './DL/db';
import userRouter from './routes/user.router';

dotenv.config();

connect();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
