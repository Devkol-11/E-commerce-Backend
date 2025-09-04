import jwt from "jsonwebtoken";

class JWT {
  private secretKey: string;
  private expiresIn: object;
  constructor(secretKey: string) {
    this.secretKey = secretKey;
    this.expiresIn = {};
  }
  signToken(payload: any) {
    return jwt.sign(payload, this.secretKey, this.expiresIn);
  }
  verifyToken(claim: string) {
    return jwt.verify(claim, this.secretKey);
  }
}

export const token = new JWT("my-secret-key");
