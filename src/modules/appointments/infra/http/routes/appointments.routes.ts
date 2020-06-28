import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointments = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointments.create);

export default appointmentsRouter;
