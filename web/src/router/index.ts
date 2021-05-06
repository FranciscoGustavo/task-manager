import { HomePage, TasksPage, BoardPage } from '../containers';

export const ROUTES = [
  { exact: true, path: '/', component: HomePage },
  { exact: true, path: '/tasks', component: TasksPage },
  { exact: true, path: '/board', component: BoardPage },
];
