import { Router } from 'express';

import AuthenticateUserServices from '../services/AuthenticateUserServices';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUserServices = new AuthenticateUserServices();

  const { user, token } = await authenticateUserServices.execute({
    email,
    password,
  });

  delete user.password;

  return res.json({ user, token });
});

export default sessionsRouter;
