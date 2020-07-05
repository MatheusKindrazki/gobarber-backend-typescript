import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/ProvidersControllers';

const providersRouter = Router();
const providers = new AppointmentsController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providers.index);

export default providersRouter;
