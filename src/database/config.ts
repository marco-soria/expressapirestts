import { connect } from "mongoose";

const db_connection = async () => {
  try {
    await connect(process.env.MONGO_DATABASE_URL || "");
    console.log("Successfully connected to database");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default db_connection;
