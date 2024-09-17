import * as dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import Server from "./models/server.model";

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

try {
  const server = new Server();
  server.start();
} catch (error) {
  console.error(error);
}
