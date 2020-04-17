import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faAt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchUserDetails } from "../store/action.js";

class Details extends Component {
  componentDidMount() {}
  render() {
    const { name, username, email, website, phone } = this.props.user;
    const { street, city, suite, zipcode } = this.props.user.address || [];

    console.log(this.props.user.address);
    return (
      <div className="detailContainer">
        <div className="container">
          <div className="details">
            <div className="name">{name}</div>
            <div className="content">
              <p>
                Username: <span className="usernameLabel">{username}</span>
              </p>
              <div className="contact">
                <p>
                  <FontAwesomeIcon icon={faPhoneSquareAlt} />
                  &nbsp;{phone && phone.split(" ")[0]}
                </p>
                <p>
                  <FontAwesomeIcon icon={faAt} />
                  {email}
                </p>
              </div>
            </div>
            <div className="address">
              <p>
                <FontAwesomeIcon icon={faHome} /> Address:
                {`${suite}, ${street}, 
                ${city}, ${zipcode}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.userDetail };
};

export default compose(withRouter, connect(mapStateToProps, null))(Details);
