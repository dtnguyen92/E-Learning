let initState = {
    user: null
}
const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_LOGIN':
            state.user = action.payload;
            return { ...state };
        default:
            return state;
    }
}
export default UserReducer;