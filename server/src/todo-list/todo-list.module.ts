import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoList } from './entities/todo-list.entity';
import { Status } from 'src/status/entities/status.entity';
import { StatusModule } from 'src/status/status.module';

@Module({
  imports: [TypeOrmModule.forFeature([TodoList, Status]), StatusModule],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
