import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cards = [
            {
                id: 1,
                name: 'One',
                description: 'Something...',
                list: 1
            },
            {
                id: 2,
                name: 'Two',
                description: 'In first column',
                list: 1
            },
            {
                id: 3,
                name: 'Three',
                description: 'Some future task',
                list: 1
            },
            {
                id: 4,
                name: 'Four',
                description: 'Not done',
                list: 1
            },
            {
                id: 5,
                name: 'Five',
                description: 'Next month',
                list: 1
            },
            {
                id: 6,
                name: 'Six',
                description: 'Maybe never to be done',
                list: 1
            },
            {
                id: 7,
                name: 'Seven',
                description: 'More stuff',
                list: 2
            },
            {
                id: 8,
                name: 'Eight',
                description: 'Advertisements',
                list: 2
            },
            {
                id: 9,
                name: 'Nine',
                description: 'Bored',
                list: 2
            },
            {
                id: 10,
                name: 'Ten',
                description: 'In progress',
                list: 2
            },
            {
                id: 11,
                name: 'Eleven',
                description: 'Already done',
                list: 3
            },
            {
                id: 12,
                name: 'Twelve',
                description: 'This is already done.',
                list: 3
            },
            {
                id: 13,
                name: 'Thirteen',
                description: 'Finished',
                list: 3
            },
            {
                id: 14,
                name: 'Fourteen',
                description: 'Website',
                list: 3
            },
            {
                id: 15,
                name: 'Fifteen',
                description: 'I don\'t think so',
                list: 3
            }
        ];
        const lists = [
            {
                id: 1,
                name: 'First',
                cards: cards.filter(card => card.list === 1)
            },
            {
                id: 2,
                name: 'Second Column',
                cards: cards.filter(card => card.list === 2)
            },
            {
                id: 3,
                name: 'Third Column',
                cards: cards.filter(card => card.list === 3)
            }
        ];
        return {cards};
    }
}
