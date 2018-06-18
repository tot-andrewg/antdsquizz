// LOGIN
export const login = (
    {
        id = undefined
    } = {}
) => ({
    type: 'LOGIN',
    id
});

// LOGOUT
export const logout = () => ({ type: 'LOGOUT' });