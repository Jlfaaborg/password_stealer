import React from "react";
import store from "../redux/store";
import { ADD_USER, postUsers, fetchUsers } from "../redux/actions";

const fetchUser = (user: { userName?: any, password?: any }) => {
    store.dispatch(fetchUsers());
};

const addUser = (user: { userName?: any, password?: any }) => {
    store.dispatch({
        type: ADD_USER,
        user: user
    })
}

const post = (): any => store.dispatch(postUsers(store.getState()));

class Form extends React.Component<{}, { userName?: any, password?: any }> {
    constructor(props: any) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            userName: props.userName,
            password: props.password
        };
    }

    handleClick = (event: any) => {
        event.preventDefault()
        const user = {
            userName: this.state.userName,
            password: this.state.password
        }
        switch (event.target.value) {
            case "add":
                addUser(user);
                break;
            case "fetch":
                fetchUser(user);
                break;
            case "post":
                post();
                break;
            default:
                return
        }
    };

    handleChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form >
                <label htmlFor="userName">User Name</label>
                <input type="text" name="userName" onChange={this.handleChange} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" onChange={this.handleChange} />
                <br />
                <button type="submit" value="add" onClick={this.handleClick} >Add</button>
                <button type="submit" value="fetch" onClick={this.handleClick} >Fetch Users</button>
                <button type="submit" value="post" onClick={this.handleClick} >Post All</button>

            </form>
        )
    }
}

export default Form;