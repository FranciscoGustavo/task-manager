import { TasksRouter } from './router';
import { TasksController } from './controller';
import { TasksService } from './service';

const service = new TasksService();
const controller = new TasksController(service);
const router = new TasksRouter(controller);
export const TASKS_ROUTER = router.getRouter();
