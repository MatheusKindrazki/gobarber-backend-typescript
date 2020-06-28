import { Request, Response } from 'express';

import { container } from 'tsyringe';

import AuthenticateUserServices from '@modules/users/services/AuthenticateUserServices';

export default class SessionsController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUserServices = container.resolve(
      AuthenticateUserServices,
    );

    const { user, token } = await authenticateUserServices.execute({
      email,
      password,
    });

    delete user.password;

    return res.json({ user, token });
  }
}
