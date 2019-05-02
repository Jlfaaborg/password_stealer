import React from "react";

const tableMaker = (users: { userName: string, password: string }[]) => {
    return users.map(user => {
        return(
            <tr>
                <th>{user.userName}</th>
                <th>{user.password}</th>
            </tr>
        )
    })
}

const Table: React.FC = (props: any) => {
    console.log(props);
    return (
        <table>
            <tr>
                <th>User Name</th>
                <th>Password</th>
            </tr>
            {tableMaker(props.users)}
        </table>
    )
}

export default Table;