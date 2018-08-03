export class CardSchema {
    id: number;
    name: string;
    description: string;
    list: number;
    tasks: {id: number, name: string, done: boolean}[];
}
