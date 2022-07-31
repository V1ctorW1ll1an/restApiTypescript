import { InMemoryCreateUserRepository } from "../../../tests/repositories/InMemoryCreateUserRepository";
import { CreateUser } from "./CreateUser";

describe("Create user success", () => {
    it("should return a user", async () => {
        // arrange
        const userRepository = new InMemoryCreateUserRepository();
        const user = new CreateUser(userRepository);

        // act
        const response = await user.execute({
            name: "John Doe",
            email: "johndoe@gmail.com",
            password: "123456",
        });

        // assert
        expect(response).toHaveProperty("id");
    });
});
