import React from "react";
import store from "../redux/store"
import { ADD_USER, DELETE_USER, UPDATE_USER } from "../redux/actions";

const addUser = (user: { userName?: any, password?: any }) => {
    store.dispatch({
        type: ADD_USER,
        user: user
    })
}

const deleteUser = (user: { userName?: any, password?: any }) => {
    store.dispatch({
        type: DELETE_USER,
        user: user
    })
}


class Form extends React.Component<{}, { userName?: any, password?: any }> {
    constructor(props: any) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            userName: props.userName,
            password: props.password
        }
    }


    handleClick = (event: any) => {
        event.preventDefault()
        console.log(this.state)
        const user = {
            userName: this.state.userName,
            password: this.state.password
        }
        switch (event.target.value) {
            case "add":
                addUser(user);
                break;
            case "delete":
                deleteUser(user)
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
                <label htmlFor="userName">Password</label>
                <input type="text" name="password" onChange={this.handleChange} />
                <button type="submit" value="add" onClick={this.handleClick} >Add</button>
                <button type="submit" value="delete" onClick={this.handleClick} >Delete</button>
            </form>
        )
    }
}

export default Form;