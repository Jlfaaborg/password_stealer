type User = {
    userName: string
    password?: string;
};

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_PASSWORD";


export function addUser(user: User) {
    return {
        type: ADD_USER,
        user
    }
};


export function deleteUser(user: User) {
    return {
        type: DELETE_USER,
        user
    }
};

export function updateUser(user: User) {
    return {
        type: UPDATE_USER,
        user
    }
}
