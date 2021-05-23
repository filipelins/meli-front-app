export class Author {
    public readonly name: string;
    public readonly lastname: string;

    constructor(props: Author) {
        Object.assign(this, props)
    }
}