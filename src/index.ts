import { app } from './app';
import { connectToDB } from './app/utils/dbconnect';
const port = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  try {
    app.listen(port, () => console.log(`App listening to port ${port}`));
    await connectToDB();
  } catch (err: any) {
    console.log(err.message);
  }
};

startServer();
