import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get(':value')
  findOne(@Param('value') value: string) {
    return this.statusService.getStatusValue(value);
  }
}
