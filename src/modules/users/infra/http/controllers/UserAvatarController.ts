import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController {
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: id,
      avatarFilename: req.file.filename,
    });

    delete user.password;

    return res.json(user);
  }
}
