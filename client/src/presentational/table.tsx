import React from "react";
import store from "../redux/store"
import { UPDATE_USER, DELETE_USER } from "../redux/actions";

// for updating users password based on userName
const getNewUser = (name: string) => {
    console.log(name)
    const query = document.getElementsByClassName(name);
    const item = query[0];
    let userNameEl = item.querySelectorAll("input")[0];
    let passwordEl = item.querySelectorAll("input")[1];

    for (const el of query) {
        el.className = userNameEl+passwordEl.value;
    }

    const user = {
        userName: userNameEl.value,
        password: passwordEl.value
    }

    console.log(user)

    return user;
}


//is used to dynamically create a table depending on how many users are in the store's state. 
const tableMaker = (users: { userName: string, password: string }[]) => {
    let i = 0;
    return users.map(user => {
        if ((user.userName === "") && (user.password === "")) {
            return ""
        }
        let update = `update${i}`;
        let remove = `delete${i}`;
        i++;
        return (
            <tr key={i} className={user.userName + user.password} >
                <th><input type="text" name="userName" placeholder={user.userName} defaultValue={user.userName}></input></th>
                <th><input type="text" name="password" placeholder={user.password} defaultValue={user.password}></input></th>
                <th>
                    <button id={update} onClick={() => store.dispatch({ type: UPDATE_USER, newUser: getNewUser(user.userName+user.password), oldUser: {user} })}>Update</button>
                    <button id={remove} onClick={() => store.dispatch({ type: DELETE_USER, user: {user} })}>Delete</button>
                </th>
            </tr>
        )
    })
}

//Three collums table 
const Table: React.FC = (props: any) => {
    return (
        <div>
            <h3>Current Store</h3>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{tableMaker(props.users)}</tbody>
            </table>
        </div>
    )
}

export default Table;