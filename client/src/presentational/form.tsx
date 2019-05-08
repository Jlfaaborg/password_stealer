import React from "react";
import store from "../redux/store";
import { ADD_USER, postUsers, fetchUsers, removeUsers } from "../redux/actions";

//fetches all users from adds to state
const fetchUser = () => {
    store.dispatch(fetchUsers());
};

//adds user to state ready to be posted
const addUser = (user: { userName?: any, password?: any }) => {
    store.dispatch({
        type: ADD_USER,
        user: user
    })
}

//posts the added users to db
const post = (): any => store.dispatch(postUsers(store.getState()));

//removes all users on form from db
const remove = (): any => store.dispatch(removeUsers(store.getState()));

class Form extends React.Component<{}, { userName?: any, password?: any }> {
    constructor(props: any) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        //to get what is typed into the inputs
        this.state = {
            userName: props.userName,
            password: props.password
        };
    }

    //handles all buttons on form
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
                fetchUser();
                break;
            case "post":
                post();
                break;
            case "remove":
                remove();
                break;
            default:
                return
        }
    };

    //realtime tracking of input values
    handleChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>Welcome To My App Here Is How To Use</h1>
                <h2>It Is Connected To React & Redux Tools By Hitting F12 (or whatever you mac users use)</h2>
                <h3>There Are Three Buttons Below:
                <ol>
                        <li>
                            Add: Adds User To Store To Be Worked On From Table Below
                    </li>
                        <li>
                            Fetch: Fetches Current Users In DB Will Add To Store And DB Below
                    </li>
                        <li>
                            Post: Posts All Users In Store Updates Users In DB With Same UserName With Latest Password
                    </li>
                        <li>
                            Remove: Removes All Users In Store From DB. <strong>MAKE SURE TO CHECK TABLE BELOW BEFORE YOU REMOVE</strong> (not like its important)
                    </li>
                    </ol>
                </h3>
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
                    <button type="submit" value="remove" onClick={this.handleClick} >Remove All</button>


                </form>
            </div>
        )
    }
}

export default Form;