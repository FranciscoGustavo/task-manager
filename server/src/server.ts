import http from 'http';
import { App } from './app';
import { WebComponent } from './components/web';
import { ApiComponent } from './components/api';

const { app } = new App();

new ApiComponent(app);
new WebComponent(app);

const server = http.createServer(app);
server.listen(5000, () => {
  console.log('Running server');
});
