// SET_SECONDARY_SIDEBAR
export const setSecondarySidebar = (
    {
        sidebarOpen = true,
        secondSidebarOpen = false,
        secondSidebarKey = undefined 
    } = {}
) => ({
    type: 'SET_SECONDARY_SIDEBAR',
    sidebar: {
        sidebarOpen,
        secondSidebarOpen,
        secondSidebarKey
    }
});

// CLOSE_SIDEBAR
export const closeSidebar = () => ({ type: 'CLOSE_SIDEBAR' });

// SET_WORKSPACE_KEY
export const setWorkspaceKey = (
    {
        activeKey = 0
    }
) => ({
    type: 'SET_WORKSPACE_KEY',
    workspace: {
        activeKey
    }
});