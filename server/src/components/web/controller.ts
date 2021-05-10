import { Request, Response } from 'express';
import path from 'path';

export interface WebControllerSchema {
  renderPwa: (req: Request, res: Response) => Promise<void>;
}

export class WebController implements WebControllerSchema {
  async renderPwa(req: Request, res: Response) {
    res.sendFile(
      path.join(__dirname, '..', '..', '..', '..', 'web', 'build', 'index.html')
    );
  }
}
