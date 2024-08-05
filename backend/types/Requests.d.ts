export interface LoginRequest {
  email: string;
}

export interface LoginResponse extends ServerMessage {
  data: {
    token: string;
  };
}

declare type ServerMessage = {
  statusCode: number;
  message: string;
  success: boolean;
};
