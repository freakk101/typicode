import React, { Component } from "react";
import Details from "./Details.js";
import { fetchUsers, fetchUserDetails } from "../store/action.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserService } from "../services.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Master extends Component {
  async componentDidMount() {
    const data = await getUserService();
    const userData = await data.json();
    this.props.fetchUsers(userData);
  }
  handleClick(id) {
    this.props.fetchUserDetails(id);
  }
  render() {
    return (
      <div className="masterContainer">
        <h1>Cover Fox List</h1>
        <div className="list">
          <table className="userDetails">
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email id</th>
            </tr>
            {this.props.users.length > 0 &&
              this.props.users.map((user) => (
                <tr
                  key={user.id}
                  onClick={this.handleClick.bind(this, user.id)}
                >
                  <td>
                    <Link to={`/details/${user.id}`}> {user.name}</Link>
                  </td>
                  <td>
                    <Link to={`/details/${user.id}`}>{user.username} </Link>
                  </td>
                  <td>
                    <Link to={`/details/${user.id}`}>{user.email} </Link>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};
const mapdispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchUsers, fetchUserDetails }, dispatch);
};
export default connect(mapStateToProps, mapdispatchToProps)(Master);
