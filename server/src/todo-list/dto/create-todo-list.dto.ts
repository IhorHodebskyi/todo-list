import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateTodoListDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @MaxLength(500)
  description?: string;
}
