// import AppError from '@shared/errors/AppError';

import FakeAppointmentsrepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsrepository: FakeAppointmentsrepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsrepository = new FakeAppointmentsrepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsrepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    const hoursNotAvailable = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    await fakeAppointmentsrepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 10, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    Promise.all([
      hoursNotAvailable.map((hour) => {
        return new Promise((resolve, _) => {
          return fakeAppointmentsrepository
            .create({
              provider_id: 'user',
              date: new Date(2020, 4, 2, hour, 0),
            })
            .then((res) => resolve(res));
        });
      }),
    ]).finally(() =>
      expect(availability).toEqual(
        expect.arrayContaining([
          { day: 19, available: true },
          { day: 20, available: false },
          { day: 21, available: false },
          { day: 22, available: true },
        ]),
      ),
    );
  });
});
