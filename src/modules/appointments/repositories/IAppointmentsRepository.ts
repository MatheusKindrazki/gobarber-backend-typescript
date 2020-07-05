import Appointement from '../infra/typeorm/entities/Appointment';
import ICreateAppointementDTO from '../dtos/ICreateAppointementDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';
import IFindAllInDayFromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointementDTO): Promise<Appointement>;
  findByDate(date: Date): Promise<Appointement | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointement[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFromProviderDTO,
  ): Promise<Appointement[]>;
}
