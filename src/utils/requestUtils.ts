export class ParseResponse {
  ok: boolean;
  response: any;
  constructor(ok: boolean, response: any) {
    this.ok = ok;
    this.response = response;
  }
}

export class ParseTokenInfo {
  id: string;
  username: string;
  role: string;

  constructor({ id, username }, role) {
    this.id = id;
    this.username = username;
    this.role = role;
  }
}