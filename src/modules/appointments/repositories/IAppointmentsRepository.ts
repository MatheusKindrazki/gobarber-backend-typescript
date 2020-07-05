import Appointement from '../infra/typeorm/entities/Appointment';
import ICreateAppointementDTO from '../dtos/ICreateAppointementDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointementDTO): Promise<Appointement>;
  findByDate(date: Date): Promise<Appointement | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointement[]>;
}
