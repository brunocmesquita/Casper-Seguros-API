import AppError from '@shared/errors/AppError';
import { NextFunction, request, Request, Response } from 'express';
import { decode, verify } from 'jsonwebtoken';
import authConfig from '@config/auth';

interface ITokenPayload {
  email: string;
  role: number;
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing');
  }

  const [Bearer, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    console.log(decodedToken);

    const { role, sub } = decodedToken as ITokenPayload;

    if (role == 0) {
      throw new AppError('Não autorizado');
    } else {
      request.user = {
        id: sub,
      };
      // const { sub } = decodedToken as ITokenPayload;

      // req.user = {
      //   id: sub,
      // };

      return next();
    }
  } catch {
    throw new AppError('Invalid JWT token');
  }
}
