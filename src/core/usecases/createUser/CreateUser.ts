import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

type CreateUserRequest = {
    name: string;
    email: string;
    password: string;
};

class CreateUser {
    constructor(private IUserRepository: IUserRepository) {}
    async execute({ email, name, password }: CreateUserRequest): Promise<User> {
        const userAlreadyExists = await this.IUserRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }
        const user = User.create({ name, email, password });
        return user;
    }
}
export { CreateUser };
