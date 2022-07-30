import { InMemoryUserRepository } from "../../../tests/repositories/InMemoryUserRepository";
import { CreateUser } from "./CreateUser";

describe("Create user success", () => {
    it("should return a user", async () => {
        // setup
        const userRepository = new InMemoryUserRepository();
        const user = new CreateUser(userRepository);
        const response = await user.execute({
            name: "John Doe",
            email: "johndoe@gmail.com",
            password: "123456",
        });

        expect(response).toHaveProperty("id");
    });
});
