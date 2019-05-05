
type User = {
  userName: string;
  password?: string;
};

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_PASSWORD";
export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIEVE_USERS = "RECIEVE_USERS";

export function addUser(user: User) {
  return {
    type: ADD_USER,
    user
  };
}

export function deleteUser(user: User) {
  return {
    type: DELETE_USER,
    user
  };
}

export function updateUser(userName: any, oldUserName: any) {
  return {
    type: UPDATE_USER,
    userName,
    oldUserName
  };
}

function requestUsers(users: User[]) {
  return {
    type: REQUEST_USERS,
    users
  };
}

function receieveUsers(users: User[], json: any) {
  console.log(json);
  return {
    type: RECEIEVE_USERS,
    users,
    data: json
  };
}

export function fetchUsers(users = []) {
  return function(dispatch: any) {
    dispatch(requestUsers(users));
    return fetch("http://localhost:9000/api")
      .then(
        (response: any) => response.json(),
        (error: any) => console.log("An error occurred.", error)
      )
      .then((json: any) =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(receieveUsers(users, json))
      );
  };
}

export function postUsers(users: User[]) {
  return function(dispatch: any) {
    console.log(users)
    return fetch("http://localhost:9000/api", {
      method: "POST",
      body: "hello"
    }).then(response => {
      console.log(response);
    });
  };
}
