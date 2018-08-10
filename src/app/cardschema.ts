export class CardSchema {
    id: number;
    name: string;
    description: string;
    list: number;
    label: string;
    tasks: {id: number, name: string, done: boolean}[];
}
