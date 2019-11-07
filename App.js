import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import { url, flags } from './src/config/database';

class App {
  constructor() {
    this.server = express();
    this.database();
    this.middlewares();
    this.routes();
  }
  database() {
    mongoose.connect(url, flags);
  }
  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
