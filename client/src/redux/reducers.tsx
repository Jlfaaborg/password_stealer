import { DELETE_USER, ADD_USER, UPDATE_USER, REQUEST_USERS, RECEIEVE_USERS } from "./actions";

const initialState = [{
    userName: "",
    password: ""
}];

function removeEmptyUsers(state: any) {
    const newState = state.filter((user: any) => {
        return (user.userName !== "" && user.userName !== "")
    });
    return newState;
}

function users(state = initialState, action: any) {
    let index: number;
    switch (action.type) {
        case ADD_USER:
            state = removeEmptyUsers(state);
            return [...state, action.user];
        case DELETE_USER:
            state = removeEmptyUsers(state);
            console.log(action.user.user)
            const newState = state.filter(user => {
                return (user !== action.user.user)
            });
            return newState;
        case UPDATE_USER:
            state = removeEmptyUsers(state);
            index = state.findIndex((user) => {
                return user.userName === action.oldUserName
            });
            if (index !== undefined) {
                state[index] = action.user
            };
            return [...state];
        case REQUEST_USERS:
            return state;
        case RECEIEVE_USERS:
            state = removeEmptyUsers(state);
            return [...state, ...action.data];
        default:
            return state;
    }
}

export default users;