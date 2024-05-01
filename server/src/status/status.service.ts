import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status) private statusRepository: Repository<Status>,
  ) {}

  async create(createStatusDto: CreateStatusDto) {
    const status = await this.statusRepository.create(createStatusDto);

    return status;
  }

  async getStatusValue(value: string) {
    const status = await this.statusRepository.findOne({
      where: {
        status: value,
      },
    });
    return status;
  }
}
