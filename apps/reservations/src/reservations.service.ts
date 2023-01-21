import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './reservations/dto/create-reservation.dto';
import { UpdateReservationDto } from './reservations/dto/update-reservation.dto';
import { ReservationsRepository } from './reservations/reservations.repository';
import { UserDto } from '@app/common';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationRepository: ReservationsRepository) {}

  async create(createReservationDto: CreateReservationDto, userId: string) {
    return await this.reservationRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId,
    });
  }

  async findAll() {
    return await this.reservationRepository.find({});
  }

  async findOne(_id: string) {
    return await this.reservationRepository.findOne({ _id });
  }

  async update(_id: string, updateReservationDto: UpdateReservationDto) {
    return await this.reservationRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  async remove(_id: string) {
    return await this.reservationRepository.findOneAndDelete({ _id });
  }
}
