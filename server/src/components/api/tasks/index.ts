import { TasksRouter } from './router';
import { TasksController } from './controller';
import { TasksService } from './service';
import { Task as TaskModel } from '../../../models';

const service = new TasksService(TaskModel);
const controller = new TasksController(service);
const router = new TasksRouter(controller);
export const TASKS_ROUTER = router.getRouter();
