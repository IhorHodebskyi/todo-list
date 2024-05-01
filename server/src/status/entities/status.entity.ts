import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TodoList } from 'src/todo-list/entities/todo-list.entity';

@Entity({ name: 'status' })
export class Status {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true, nullable: false })
  public status: string;

  @OneToMany(() => TodoList, (todoList) => todoList.status)
  public todoList: TodoList[];
}
