interface ResponseErrorInterface {
  message: string;
  code: number;
}

export class ResponseError {
  message: string;
  code: number;
  constructor({ message, code, }) {
    this.message = message;
    this.code = code;
  }
}
