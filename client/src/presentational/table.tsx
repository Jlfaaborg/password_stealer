import React from "react";
import store from "../redux/store"
import { UPDATE_USER, DELETE_USER } from "../redux/actions";

const getNewUser = (name: string) => {
    const query = document.getElementsByClassName(name);
    const item = query[0];
    let userNameEl = item.querySelectorAll("input")[0];
    let passwordEl = item.querySelectorAll("input")[1];

    for (const el of query) {
        el.className = userNameEl.value
    }

    const user = {
        userName: userNameEl.value,
        password: passwordEl.value
    }

    return user;
}



const tableMaker = (users: { userName: string, password: string }[]) => {
    let i = 0;
    return users.map(user => {
        if ((user.userName === "") && (user.password === "")) {
            return ""
        }
        let update = `update${i}`;
        let commit = `commit${i}`;
        i++;
        return (
            <tr key={i} className={user.userName} >
                <th><input type="text" name="userName" defaultValue={user.userName}></input></th>
                <th><input type="text" name="password" defaultValue={user.password}></input></th>
                <th>
                    <button id={update} onClick={() => store.dispatch({ type: UPDATE_USER, user: getNewUser(user.userName), oldUserName: user.userName })}>Update</button>
                    <button id={commit} onClick={() => store.dispatch({ type: DELETE_USER, user: user })}>Delete</button>
                </th>
            </tr>
        )
    })
}

const Table: React.FC = (props: any) => {
    console.log(props);
    return (
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
    )
}

export default Table;