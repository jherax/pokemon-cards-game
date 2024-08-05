import express from 'express';
import jwt from 'jsonwebtoken';

import config from './config';

/** @see https://tsoa-community.github.io/docs/authentication.html */

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[],
) {
  if (securityName === 'jwt') {
    // we remove the word Bearer that specifies the strategy used,
    // and then pass the token to the verify function to validate it.
    const auth: string = request.headers['authorization'] ?? '';
    const token: string = auth.replace('Bearer ', '');

    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error('No token provided'));
      }

      jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        err ? reject(err) : resolve(decoded);
      });
    });
  }
}
