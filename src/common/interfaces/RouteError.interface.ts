import { HttpStatusCode } from '../enums/HttpStatusCode.enum';

export interface RouteError {
  status: HttpStatusCode;
  statusText?: string;
  message?: string;
}
