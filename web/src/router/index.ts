import { HomePage, TasksPage } from '../containers';

export const ROUTES = [
  { exact: true, path: '/', component: HomePage },
  { exact: true, path: '/tasks', component: TasksPage },
];
