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
    await fakeAppointmentsrepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 8, 0),
    });

    await fakeAppointmentsrepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 10, 0),
    });

    await fakeAppointmentsrepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 8, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, availability: true },
        { day: 20, availability: false },
        { day: 21, availability: false },
        { day: 22, availability: true },
      ]),
    );
  });
});
