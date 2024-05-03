import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoList } from './entities/todo-list.entity';
import { Repository } from 'typeorm';
import { StatusService } from '../status/status.service';

@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(TodoList)
    private readonly todoListRepository: Repository<TodoList>,
    private statusService: StatusService,
  ) {}
  async create(createTodoListDto: CreateTodoListDto) {
    const existTodo = await this.todoListRepository.findOne({
      where: {
        title: createTodoListDto.title,
      },
    });
    if (existTodo) throw new BadRequestException('Todo already exist');
    const todo = await this.todoListRepository.create(createTodoListDto);
    const status = await this.statusService.getStatusValue('pending');
    todo.status = status;
    return await this.todoListRepository.save(todo);
  }

  async findAll() {
    return await this.todoListRepository.find({ relations: ['status'] });
  }

  async update(id: number, updateTodoListDto: UpdateTodoListDto) {
    const existTodo = await this.todoListRepository.findOne({
      where: { id },
    });
    if (!existTodo) throw new BadRequestException('Todo not found');
    const status = await this.statusService.getStatusValue(
      `${updateTodoListDto.status}`,
    );
    const todo = await this.todoListRepository.create({
      ...updateTodoListDto,
      status,
    });
    await this.todoListRepository.update(id, todo);
    return { id, ...todo };
  }

  async remove(id: number) {
    const existTodo = await this.todoListRepository.findOne({
      where: { id },
    });
    if (!existTodo) throw new BadRequestException('Todo not found');
    return await this.todoListRepository.delete(id);
  }
}
