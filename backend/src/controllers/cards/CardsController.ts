/** @see https://tsoa-community.github.io/docs/decorators.html */

import * as express from 'express';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  Route,
  Security,
  SuccessResponse,
} from 'tsoa';

import type {
  CreateCardRequest,
  CreateCardResponse,
  DeleteCardResponse,
  GetCardsQuery,
  GetCardsResponse,
} from '../../../types/Requests';
import DAL from '../../db/DAL/cards';
import messages from '../../server/messages';

const {SUCCESSFUL, SUCCESSFUL_ADDED, SUCCESSFUL_DELETE} = messages;

@Route('cards')
export class CardsController extends Controller {
  /**
   * Creates a new Pokémon card.
   */
  @SuccessResponse(SUCCESSFUL_ADDED.statusCode, SUCCESSFUL_ADDED.message)
  @Security('jwt')
  @Post('create')
  public async createCard(@Body() requestBody: CreateCardRequest) {
    const newCard = await DAL.saveCard(requestBody.card);
    const result: CreateCardResponse = {
      ...SUCCESSFUL_ADDED,
      data: {id: newCard.id},
    };
    this.setStatus(SUCCESSFUL_ADDED.statusCode);
    return result;
  }

  /**
   * Get all cards by Pokémon type.
   */
  @SuccessResponse(SUCCESSFUL.statusCode, SUCCESSFUL.message)
  @Security('jwt')
  @Get('type/{cardType}')
  public async getCardsByType(
    cardType: string,
    @Request() request: express.Request,
  ) {
    const queryParams = request.query as GetCardsQuery;
    const pageSize = +queryParams.pageSize || 10;
    const page = +queryParams.page || 1;

    const cards = await DAL.getCardsByType(cardType, pageSize, page);
    const result: GetCardsResponse = {
      ...SUCCESSFUL,
      data: cards,
    };
    this.setStatus(SUCCESSFUL.statusCode);
    return result;
  }

  /**
   * Get all cards by Pokémon name.
   */
  @SuccessResponse(SUCCESSFUL.statusCode, SUCCESSFUL.message)
  @Security('jwt')
  @Get('name/{cardName}')
  public async getCardsByName(
    cardName: string,
    @Request() request: express.Request,
  ) {
    const queryParams = request.query as GetCardsQuery;
    const pageSize = +queryParams.pageSize || 10;
    const page = +queryParams.page || 1;

    const cards = await DAL.getCardsByName(cardName, pageSize, page);
    const result: GetCardsResponse = {
      ...SUCCESSFUL,
      data: cards,
    };
    this.setStatus(SUCCESSFUL.statusCode);
    return result;
  }

  /**
   * Deletes a Pokémon card.
   */
  @SuccessResponse(SUCCESSFUL_DELETE.statusCode, SUCCESSFUL_DELETE.message)
  @Security('jwt')
  @Delete('delete/{cardId}')
  public async deleteCard(cardId: string, @Request() request: express.Request) {
    const rows = await DAL.deleteCard(cardId);
    const result: DeleteCardResponse = {
      ...SUCCESSFUL_DELETE,
      data: {deleted: rows > 0},
    };
    this.setStatus(SUCCESSFUL_DELETE.statusCode);
    return result;
  }
}
