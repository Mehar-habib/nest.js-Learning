import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// @Injectable() decorator se NestJS ko pata lagta hai ke is class ko DI (Dependency Injection) ke through inject kiya ja sakta hai
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // Middleware ka main method "use" hota hai
  // Ye automatically har request pe call hoga
  use(req: Request, res: Response, next: NextFunction) {
    // console.log: request method (GET, POST, PUT, DELETE) aur request URL print karna
    console.log(`[${req.method}] [${req.originalUrl}]`);

    // next() call karna zaroori hai, warna request atak jayegi aur aage controller tak nahi pohonchegi
    next();
  }
}
