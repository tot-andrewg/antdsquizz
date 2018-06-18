// Default state
const initialState = {
    id: undefined,
    name: {
        first: 'Anonymous',
        last: ''
    }
};

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                id: action.id
            };
        case 'LOGOUT':
            return {
                ...state,
                id: undefined,
                name: {
                    first: 'Anonymous',
                    last: ''
                }
            };
        default:
            return state;
    }
};