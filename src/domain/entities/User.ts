import { AbstractedEntity } from "../../common/domain/entities/AbstractedCreate";

type CreateUserProps = {
    name: string;
    email: string;
    password: string;
};

class User extends AbstractedEntity<CreateUserProps> {
    constructor(props: CreateUserProps, id?: string) {
        super(props, id);
    }

    static create(props: CreateUserProps, id?: string): User {
        return new User(props, id);
    }
}

export { User };
