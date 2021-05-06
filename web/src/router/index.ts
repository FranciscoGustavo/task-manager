import { HomePage, TasksPage, BoardPage, TaskPage } from '../containers';

export const ROUTES = [
  { exact: true, path: '/', component: HomePage },
  { exact: true, path: '/tasks', component: TasksPage },
  { exact: true, path: '/tasks/:id', component: TaskPage },
  // { exact: true, path: '/board', component: BoardPage },
];
