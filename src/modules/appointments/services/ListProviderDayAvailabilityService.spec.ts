// import AppError from '@shared/errors/AppError';

import FakeAppointmentsrepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';

let fakeAppointmentsrepository: FakeAppointmentsrepository;
let listProviderDayAvailability: ListProviderDayAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsrepository = new FakeAppointmentsrepository();
    listProviderDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentsrepository,
    );
  });

  it('should be able to list the day availability from provider', async () => {
    await fakeAppointmentsrepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 14, 0),
    });

    await fakeAppointmentsrepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 15, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 21, 11, 0).getTime();
    });

    const availability = await listProviderDayAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
      day: 21,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 10, available: false },
        { hour: 11, available: false },
        { hour: 14, available: false },
        { hour: 15, available: false },
        { hour: 16, available: true },
      ]),
    );
  });
});
