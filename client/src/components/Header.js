// class based componnent
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  // this.props.auth is the result from the authReducer
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="pmt"><Payments/></li>,
          <li key="credits" style={{ margin: '0 10px' }}>
          Credits:  {this.props.auth.credits}</li>,
          <li key="logout"><a href="/api/logout">Logout</a></li>
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <Link
          to={this.props.auth ? "/surveys" : "/"}
          className="left brand-logo">
            Emailer
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  // this determines the state from reducers/authReducer.js
  // reducers/index.js assigns it as auth.
  return { auth };
}

export default connect(mapStateToProps)(Header);
