import { IUserRepository } from "../../core/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

class InMemoryCreateUserRepository implements IUserRepository {
    private users: User[] = [];

    public async findByEmail(email: string): Promise<User | undefined> {
        return this.users.find((user) => user.props.email === email);
    }
}

export { InMemoryCreateUserRepository };
