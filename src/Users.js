import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const url = 'http://localhost:3335/users';






class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { Users: [] };

    }




    GetUserData = async () => {
        const responseDataUser = await fetch(url);
        const UserJson = await responseDataUser.json();
        return UserJson;
    }

    componentDidMount = async () => {

        const Users = await this.GetUserData();
        this.setState({ Users });


    }
    render() {
        const user = this.state.Users;
        return (

            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>
                                Name:
                                 </th>
                            <th>
                                Details
                                </th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((index, i) =>
                            <tr key={index}>

                                <td><img src={user[i].picture.thumbnail} alt="" /></td>
                                <td>{user[i].first} {user[i].last}</td>
                                <td><Link to={`/details/${i}`}>Details</Link></td>
                            </tr>
                        )}
                    </tbody>
                </table>

                

            </div>

        )
    }
}


export default Users