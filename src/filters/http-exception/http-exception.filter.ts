// NestJS se required cheezen import kar rahe hain
import {
  ArgumentsHost, // ye context deta hai (HTTP, RPC, WebSockets) request ka
  Catch, // decorator: ye batata hai ke ye class exception filter hai
  ExceptionFilter, // interface: isko implement karna padta hai filter banane ke liye
  HttpException, // NestJS ka base class for HTTP errors (jaise 404, 403, etc)
} from '@nestjs/common';

// Express se Request aur Response objects import kar rahe hain
import { Request, Response } from 'express';

// @Catch() decorator lagaya → iska matlab hai ye sab exceptions ko catch karega
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  // "catch" method compulsory hai ExceptionFilter implement karte waqt
  // ye tab trigger hota hai jab koi exception throw hota hai controller/service me
  catch(exception: HttpException, host: ArgumentsHost) {
    // 1. Context ko HTTP context me convert kar rahe hain
    const ctx = host.switchToHttp();

    // 2. Response object (jo client ko bhejna hai) nikal rahe hain
    const response = ctx.getResponse<Response>();

    // 3. Request object bhi nikal rahe hain (jisme URL, params, body, headers hote hain)
    const request = ctx.getRequest<Request>();

    // 4. Exception ka status code nikal rahe hain (e.g. 404, 403, 500)
    const status = exception.getStatus();

    // 5. Custom JSON response bhej rahe hain user ko
    response.status(status).json({
      statusCode: status, // error ka status code
      timestamp: new Date().toISOString(), // current time
      path: request.url, // kis URL pe error hua
      message: exception.message, // error ka message
    });
  }
}
