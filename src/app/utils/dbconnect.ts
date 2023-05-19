import mongoose from 'mongoose';
const { DB_URI } = process.env;

// connect to db
export const connectToDB = async (): Promise<void> => {
  try {
    if (!DB_URI) {
      console.log('Invalid database');
      process.exit(1);
    }
    await mongoose.connect(DB_URI);
    console.log(`Connected to mongodb`);
  } catch (err: any) {
    console.log(err.message);
  }
};
