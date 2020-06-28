import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserServices from '@modules/users/services/AuthenticateUserServices';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUserServices = container.resolve(AuthenticateUserServices);

  const { user, token } = await authenticateUserServices.execute({
    email,
    password,
  });

  delete user.password;

  return res.json({ user, token });
});

export default sessionsRouter;
