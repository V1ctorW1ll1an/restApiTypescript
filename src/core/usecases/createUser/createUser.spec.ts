import { CreateUser } from "./CreateUser";

describe("Create user success", () => {
    it("should return a user", async () => {
        // setup
        const user = new CreateUser();
        const response = await user.execute({
            name: "John Doe",
            email: "johndoe@gmail.com",
            password: "123456",
        });

        expect(response).toHaveProperty("id");
    });
});
