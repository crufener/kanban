import { CardSchema } from './cardschema';

export class ListSchema {
    id: number;
    name: string;
    bgColor: string;
    cards: CardSchema[];
}
