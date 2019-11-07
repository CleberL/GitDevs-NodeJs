import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';
import { url, flags } from './config/database';

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
    this.server.use(cors());
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
