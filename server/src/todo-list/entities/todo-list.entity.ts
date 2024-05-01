import { ApiProperty } from '@nestjs/swagger';
import { Status } from 'src/status/entities/status.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TodoList {
  @ApiProperty({ example: '1' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'task' })
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @ApiProperty({ example: 'description' })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @ApiProperty({ example: 'create date' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ example: 'update date' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Status, (status) => status.todoList)
  @JoinColumn({ name: 'status' })
  public status: Status;
}
