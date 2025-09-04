import bcrypt from 'bcrypt';

class Encrytpion {
  private saltRounds: number;

  constructor(saltRounds: number = 10) {
    this.saltRounds = saltRounds;
  }
  async hash(data: any): Promise<string> {
    return bcrypt.hash(data, this.saltRounds);
  }
  async compare(data: string, hashed: string) {
    return bcrypt.compare(data, hashed);
  }
}

export const encrypt = new Encrytpion(10);
