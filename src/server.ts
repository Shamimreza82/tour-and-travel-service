import mongoose from 'mongoose';
import { app } from './app';
import { envFile } from './config';


async function server() {
  try {
    await mongoose.connect(envFile.dataBase_url as string)

    app.listen(envFile.port, () => {
      console.log(`Example app listening on port 3000`);
    });
  } catch (error) {
    console.log(error);
  }
}

server()