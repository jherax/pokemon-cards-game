import jwt from 'jsonwebtoken';
import {Controller, Post, Route, SuccessResponse} from 'tsoa';

import {type LoginResponse} from '../../../types/Requests';
import config from '../../server/config';
import messages from '../../server/messages';

const {SUCCESSFUL_LOGIN} = messages;

@Route('login')
export class LoginController extends Controller {
  /**
   * Generates a new JWT token for the user.
   */
  @SuccessResponse(SUCCESSFUL_LOGIN.statusCode, SUCCESSFUL_LOGIN.message)
  @Post()
  public login(/* @Body() body: LoginRequest */): LoginResponse {
    const user = new Date().getTime().toString();
    const token = jwt.sign({data: user}, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRE,
    });

    const result: LoginResponse = {
      ...SUCCESSFUL_LOGIN,
      data: {
        token,
      },
    };

    this.setStatus(SUCCESSFUL_LOGIN.statusCode);
    return result;
  }
}
