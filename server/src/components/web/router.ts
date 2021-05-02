import { Router } from 'express';
import { WebControllerSchema } from './controller';

export class WebRouter {
  private router: Router;

  constructor(private _controller: WebControllerSchema) {
    this.router = Router();
    this.router.get('*', this._controller.renderPwa);
  }

  getRouter() {
    return this.router;
  }
}
