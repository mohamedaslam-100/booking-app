import { UserService } from '../services/userservice';

export class UserUseCase {
  static registerUser = UserService.register;
  static loginUser = UserService.login;
}
