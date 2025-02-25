import mongoose from "mongoose";



const dbConnection = async () => {
  try {
    
    const connect = await mongoose.connect(process.env.MONGO_DB_URI);

    if (connect.STATES.connected) {
      console.log("db conneciton successfull");
      return true;
    }
    return false;
  } catch (error) {
    console.log("db error", error);
    throw new Error(error);
  }
};

export default dbConnection;
