// Default state
const initialState = {
    sidebar: {
        sidebarOpen: true,
        secondSidebarOpen: false,
        secondSidebarKey: undefined
    },
    workspace: {
        activeKey: undefined
    }
};

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SECONDARY_SIDEBAR':
            return {
                ...state,
                sidebar: {
                    sidebarOpen: !action.sidebar.secondSidebarKey,
                    secondSidebarOpen: !!action.sidebar.secondSidebarKey,
                    secondSidebarKey: action.sidebar.secondSidebarKey
                }
            };
        case 'CLOSE_SIDEBAR':
            return {
                ...state,
                sidebar: {
                    sidebarOpen: true,
                    secondSidebarOpen: false,
                    secondSidebarKey: undefined
                }
            };
        case 'SET_WORKSPACE_KEY':
            return {
                ...state,
                workspace: {
                    activeKey: action.workspace.activeKey
                }
            };
        default:
            return state;
    }
};