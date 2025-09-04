import { IsignInData, IsignUpData } from './types/authTypes.js';

class AuthService {
  constructor(
    private repo: any,
    private logger: any,
    private emailService: any
  ) {}

  public async SignUp(data: IsignUpData) {
    const { name, email, password } = data;
  }
  public async SignIn() {}
  public async signOut() {}
  public async forgotPassword() {}
  public async resestPassword() {}
}
