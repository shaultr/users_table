import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connect = () => {
  const mongoUri = process.env.MONGO_URL;

  if (!mongoUri) {
    throw new Error('MONGO_URI is not defined in the environment variables');
  }

  mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
};
