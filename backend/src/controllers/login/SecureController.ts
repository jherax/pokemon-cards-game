import {Body, Controller, Post, Route, Security, SuccessResponse} from 'tsoa';

import messages from '../../server/messages';

const {SUCCESSFUL} = messages;

@Route('secure')
export class SecureController extends Controller {
  /**
   * Testing JWT authentication.
   */
  @SuccessResponse(SUCCESSFUL.statusCode, SUCCESSFUL.message)
  @Security('jwt')
  @Post()
  public async secure(@Body() requestBody: TestSecureRequest) {
    return Promise.resolve<TestSecureResponse>({
      data: `Read data: ${requestBody.payload}`,
    });
  }
}

export type TestSecureRequest = {
  payload: string;
};

export type TestSecureResponse = {
  data: string;
};
