// Default state
const conversationsReducerDefaultState = [
    {
        id: '11111',
        type: 'conversation',
        label: 'Squizz UI/UX',
        users: [
            {
                id: 'user1',
                name: {
                    first: 'Joe',
                    last: 'Blow'
                }
            },
            {
                id: 'user2',
                name: {
                    first: 'Jim',
                    last: 'Bob'
                }
            },
            {
                id: 'user3',
                name: {
                    first: 'Andy',
                    last: 'Grant'
                }
            },
        ]
      },
      {
        id: '22222',
        type: 'conversation',
        label: 'TOTECS Release QA Testing',
        users: [
            {
                id: 'user2',
                name: {
                    first: 'Jim',
                    last: 'Bob'
                }
            },
            {
                id: 'user3',
                name: {
                    first: 'Andy',
                    last: 'Grant'
                }
            },
        ]
      },
      {
        id: '44444',
        type: 'conversation',
        label: 'Squizz Internal Discussion',
        users: [
            {
                id: 'user1',
                name: {
                    first: 'Joe',
                    last: 'Blow'
                }
            },
            {
                id: 'user3',
                name: {
                    first: 'Andy',
                    last: 'Grant'
                }
            },
        ]
      }
];

// Reducer
export default (state = conversationsReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};