import Appointement from '../infra/typeorm/entities/Appointment';
import ICreateAppointementDTO from '../dtos/ICreateAppointementDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointementDTO): Promise<Appointement>;
  findByDate(date: Date): Promise<Appointement | undefined>;
}
