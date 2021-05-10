import { HomePage, TasksPage, TaskPage } from '../containers';

export const ROUTES = [
  { exact: true, path: '/', component: HomePage },
  { exact: true, path: '/tasks', component: TasksPage },
  { exact: true, path: '/tasks/:id', component: TaskPage }
];
