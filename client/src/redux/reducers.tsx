import { DELETE_USER, ADD_USER, UPDATE_USER, REQUEST_USERS, RECEIEVE_USERS } from "./actions";

const initialState = [{
    userName: "",
    password: ""
}];

function users(state = initialState, action: any) {
    let index: number;
    switch (action.type) {
        case ADD_USER:
            return [...state, action.user];
        case DELETE_USER:
            const newState = state.filter(user => {
                return user.userName !== action.user.userName
            });
            return newState;
        case UPDATE_USER:
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
        console.log(action)
            return [...state, ...action.data];
        default:
            return state;
    }
}

export default users;