import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TodoList } from './entities/todo-list.entity';

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @ApiOperation({ summary: 'create to do' })
  @ApiResponse({ status: 200, type: TodoList })
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createTodoListDto: CreateTodoListDto) {
    return this.todoListService.create(createTodoListDto);
  }

  @ApiOperation({ summary: 'get to do list' })
  @ApiResponse({ status: 200, type: [TodoList] })
  @Get()
  findAll() {
    return this.todoListService.findAll();
  }

  @ApiOperation({ summary: 'update to do' })
  @ApiResponse({ status: 200, type: TodoList })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoListDto: UpdateTodoListDto,
  ) {
    return this.todoListService.update(+id, updateTodoListDto);
  }

  @ApiOperation({ summary: 'delete to do' })
  @ApiResponse({ status: 204 })
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    console.log(id);
    return this.todoListService.remove(+id);
  }
}
