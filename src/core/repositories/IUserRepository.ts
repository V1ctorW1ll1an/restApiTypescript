import { User } from "../../domain/entities/User";

interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
}

export { IUserRepository };
