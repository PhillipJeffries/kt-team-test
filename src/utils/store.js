const cards = [
    { 
        id: 'card-1',
        title: 'Learning how to cook'
    },
    { 
        id: 'card-2',
        title: 'Learning how to eat'
    },
    { 
        id: 'card-3',
        title: 'Learning how to sleep'
    },
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Tootoo',
            cards,
        },
    },
    listIds: ['list-1']
};

export default data;