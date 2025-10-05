import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentNewModule } from './student-new/student-new.module';
import { User2Module } from './user2/user2.module';
import { Employee2Module } from './employee2/employee2.module';
import { Product2Module } from './product2/product2.module';
import { LibaryModule } from './libary/libary.module';
import { Project3Module } from './project3/project3.module';

@Module({
  imports: [
    EmployeeModule,
    CategoryModule,
    StudentModule,
    CustomerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL!),
    StudentNewModule,
    User2Module,
    Employee2Module,
    Product2Module,
    LibaryModule,
    Project3Module,
  ],
  controllers: [
    AppController,
    UserController,
    ProductController,
    MynameController,
    UserRolesController,
    ExceptionController,
    DatabaseController,
    EvController,
  ],
  providers: [AppService, ProductService, DatabaseService, EvService],
})
export class AppModule implements NestModule {
  // configure method me batate hain ke kaun sa middleware kahan apply karna hai
  configure(consumer: MiddlewareConsumer) {
    // LoggerMiddleware apply kiya gaya hai saare routes ('*') ke liye
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
