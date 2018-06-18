import React from 'react';
import { Layout, Menu, Icon, Badge, Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import LoginForm from '../Components/LoginForm';

import { login, logout } from '../actions/user';

export class PublicPage extends React.Component {
  login = (user) => {
    this.props.login({
      id: ''
    });
  };
  render() {
    return (
      <Row style={{ height: '100%' }}>
        <Col xs={24} md={12} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#292929', color: '#fefefe' }}>
          <div>
            <h1>left</h1>
            <p>something</p>
            <p>something else</p>
          </div>
        </Col>
        <Col xs={24} md={12} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <h1>Login</h1>
            <LoginForm />
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicPage);