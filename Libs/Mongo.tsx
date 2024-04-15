import mongoose from 'mongoose';

export async function ConnectDB() {
  const ready_state = mongoose.connection.readyState;

  if (ready_state !== 1) {
    console.log('connecting');
    try {
      if (process.env.MONGO_URL) {
        await mongoose.connect(process.env.MONGO_URL);
      } else {
        throw new Error('Connection String Error');
      }
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw new Error('Error connecting to MongoDB');
    }
  }

  return mongoose;
}
