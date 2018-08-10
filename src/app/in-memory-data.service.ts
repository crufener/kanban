import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cards = [
            {
                id: 1,
                name: 'One',
                description: 'Something...',
                list: 1,
                label: 'green',
                tasks: [
                    {
                        id: 1,
                        name: 'first task',
                        done: true
                    },
                    {
                        id: 2,
                        name: 'second task',
                        done: false
                    },
                    {
                        id: 3,
                        name: 'third task',
                        done: true
                    }
                ]
            },
            {
                id: 2,
                name: 'Two',
                description: 'In first column',
                list: 1,
                label: 'green',
                tasks: [
                    {
                        id: 1,
                        name: 'first task',
                        done: true
                    }
                ]
            },
            {
                id: 3,
                name: 'Three',
                description: 'Some future task',
                list: 2,
                label: 'pink',
                tasks: [
                    {
                        id: 1,
                        name: 'first task',
                        done: true
                    }
                ]
            },
            {
                id: 4,
                name: 'Four',
                description: 'Not done',
                list: 1,
                label: 'red',
                tasks: [
                    {
                        id: 1,
                        name: 'first task',
                        done: true
                    }
                ]
            },
            {
                id: 5,
                name: 'Five',
                description: 'Next month',
                list: 3,
                label: 'yellow',
                tasks: [
                    {
                        id: 1,
                        name: 'first task',
                        done: true
                    }
                ]
            },
            {
                id: 6,
                name: 'Six',
                description: 'Maybe never to be done',
                list: 1,
                label: 'purple',
                tasks: [
                    {
                        id: 1,
                        name: 'first task',
                        done: true
                    }
                ]
            }
        ];
        return {cards};
    }
}
