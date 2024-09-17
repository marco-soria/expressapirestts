import * as dotenv from "dotenv";
import Server from "./src/models/server.model";

dotenv.config();

try {
  const server = new Server();
  server.start();
} catch (error) {
  console.error(error);
}
