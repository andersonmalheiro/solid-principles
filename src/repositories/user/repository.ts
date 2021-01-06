import { User } from "../../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<Omit<User, "password"> | undefined>;
  create(user: User): Promise<void>;
  update(id: string, data: Partial<User>): Promise<void>;
  read(id: number): Promise<User>;
  delete(id: number): Promise<void>;
  list(filters: any): Promise<User[]>;
}
