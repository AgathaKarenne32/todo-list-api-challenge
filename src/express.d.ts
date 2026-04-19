/*declare namespace Express {
  interface Request {
    user: {
      id: string;
      name: string;
      username: string;
    };
  }
}*/
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}