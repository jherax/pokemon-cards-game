import type {PokemonCard} from './Pokemon.tcg.v2';

export interface LoginRequest {
  email: string;
}

export interface LoginResponse extends ServerMessage {
  data: {
    token: string;
  };
}

export interface CreateCardRequest {
  card: string; // JSON PokemonCard
}

export interface CreateCardResponse extends ServerMessage {
  data: {
    id: string;
  };
}

export interface GetCardsResponse extends ServerMessage {
  data: PokemonCard[];
}

export type GetCardsQuery = Readonly<{
  pageSize: string | number;
  page: string | number;
}>;

export interface DeleteCardRequest {
  cardId: string;
}

export interface DeleteCardResponse extends ServerMessage {
  data: {
    deleted: boolean;
  };
}

declare type ServerMessage = {
  statusCode: number;
  message: string;
  success: boolean;
};
