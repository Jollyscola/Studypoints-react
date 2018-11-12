import React, { Component } from 'react';
import data from './data/data.json';
import { Link } from 'react-router-dom';





class Usersinfo extends Component {

    constructor(props) {
        super(props);
        this.state = { Users: [] };

    }


    //<rowtable user={User} />
    /* componentDidMount() {

       const User = Users.RowTableUsers();
       this.setState({ User });

   }  */


    render() {
        const users = data.users;
        const props = this.props;
        const match = props.match;
        const history = props.history;
        const index = match.params.index;
        console.log("props ", props, " match ", match, " history ", history, "index", index);

        return (


            <div>

                <div>
                    <h1>Details for {users[index].first} {users[index].last}</h1>
                </div>
                <table className="table">
                    <tr><th >
                        <h5>Gender</h5></th><td>{users[index].gender}</td></tr>
                    <tr><th ><h5>First name</h5></th><td> {users[index].first}</td></tr>
                    <tr>
                        <th>
                            <h5>Last name</h5>
                        </th>
                        <td>
                            {users[index].last}
                        </td>

                    </tr>
                    <tr>
                        <th>
                            <h5>Street</h5>
                        </th>
                        <td>
                            {users[index].street}
                        </td>
                            <td rowspan="4" >

                                <img height="250px" src={users[index].picture.large} alt='' />
                            </td>

                    </tr>
                    <tr>
                        <th>
                            <h5>City</h5>
                        </th>
                        <td>
                            {users[index].city}
                        </td>

                    </tr>
                    <tr>
                        <th>
                            <h5>Dob</h5>
                        </th>
                        <td>
                            {users[index].dob}
                        </td>

                    </tr>
                    <tr>
                        <th>
                            <h5>Phone</h5>
                        </th>
                        <td>
                            {users[index].phone}
                        </td>

                    </tr>
                    <tr>
                        <th>
                            <h5>Cell</h5>
                        </th>
                        <td>
                            {users[index].cell}
                        </td>

                    </tr>
                    <tr>
                        <th>
                            <h5>Email</h5>
                        </th>
                        <td>
                            {users[index].email}
                        </td>

                    </tr>
                </table>

                <ul>
                    <li><Link to="/All">Home</Link></li>
                </ul>
            </div>
        )
    }
}


export default Usersinfo;
