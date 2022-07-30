import crypto from "crypto";

abstract class AbstractedEntity<T> {
    protected id?: string;
    public props: T;
    constructor(props: T, id?: string) {
        this.props = props;
        this.id = id ?? crypto.randomUUID(); // if id !== undefined or null, use it, otherwise generate a random id
    }
}

export { AbstractedEntity };
