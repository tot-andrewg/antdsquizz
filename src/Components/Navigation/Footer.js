import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/user';

class Footer extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    this.props.login({
      id: 'andy'
    })
  }
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout()
  }
  render() {
    return (
      <Layout style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fefefe' }}>
        Copyright © Squizz Pty Ltd 2018 | {!!this.props.user.id ? <a onClick={this.handleLogout} href="">Logout</a> : <a onClick={this.handleLogin} href="">Login</a>}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);