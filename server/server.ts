import http from 'http';
import { App } from './app';

const app = new App().app;
const server = http.createServer(app);

server.listen(5000, () => {
  console.log('Running server');
});