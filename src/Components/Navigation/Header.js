import React from 'react';
import { Layout, Menu, Row, Col, Avatar, Tabs, Icon, Select, Input, Dropdown } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { login, logout } from '../../actions/user';
import WorkspaceTabs from '../Workspace/WorkspaceTabs';
// import uuid from 'uuid';

const Option = Select.Option;
const SubMenu = Menu.SubMenu;

const tabList = [
  {
    id: '11111',
    type: 'conversation',
    label: 'Squizz UI/UX'
  },
  {
    id: '22222',
    type: 'conversation',
    label: 'TOTECS Release QA Testing'
  },
  {
    id: 'andy',
    type: 'user',
    label: 'Andrew Grant'
  },
  {
    id: '44444',
    type: 'conversation',
    label: 'Squizz Internal Discussion'
  },
  {
    id: '66666',
    type: 'conversation',
    label: 'Rowan Drew'
  },
  // {
  //   id: '77777',
  //   type: 'conversation',
  //   label: 'Rich Allen'
  // },
  // {
  //   id: '88888',
  //   type: 'conversation',
  //   label: 'Sally Mendez'
  // },
  // {
  //   id: '99999',
  //   type: 'conversation',
  //   label: 'Louise Walker'
  // },
];

class Header extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    this.props.login({
      id: 'andy'
    })
  }
  handleLogout = (e) => {
    // e.preventDefault();
    this.props.logout()
  }
  render() {
    return (
      <Layout style={{ background: '#001529', padding: 0, display: 'flex', alignItems: 'center', flexDirection: 'row', maxHeight: '64px' }} >
        {/* If logged in, show tabs */ !!this.props.user.id && 
          <Layout style={{ flex: '1 0 auto' }}>
            <WorkspaceTabs tabList={tabList} activeKey={this.props.workspace.activeKey} />
          </Layout>
        }{/* If logged in, show workspace */ !!this.props.user.id && 
          <Layout style={{ flex: '0 1 auto', marginRight: '1rem', background: 'transparent' }}>
            <Select placeholder="Workspace" style={{ width: 150 }}>
              <Option value="home">Home</Option>
              <Option value="worksquizz">Work/Squizz</Option>
              <Option value="worktotecs">Work/TOTECS</Option>
            </Select>
          </Layout>
        }{/* If logged in, show search */ !!this.props.user.id && 
          <Layout style={{ flex: '0 1 auto', marginRight: '1rem', background: 'transparent' }}>
            <Input addonAfter={<Icon type="search" />} placeholder="Search" />
          </Layout>
        }
        <Layout style={{ flex: '0 1 auto', marginLeft: 'auto', marginRight: '1rem', background: 'transparent' }}>
          <Dropdown overlay={
            <Menu>
              <Menu.Item>
                <a rel="noopener noreferrer" href="/"><Icon type="user" /> My Profile</a>
              </Menu.Item>
              <Menu.Item>
                <a rel="noopener noreferrer" href="/"><Icon type="setting" /> My Settings</a>
              </Menu.Item>
              {/* Login/Logout buttons */}
              {!!this.props.user.id ?
                <Menu.Item>
                  <Link to='/' onClick={this.handleLogout}>
                   <Icon type="logout" /> Logout
                  </Link>
                </Menu.Item>
                :
                <Menu.Item>
                  <a rel="noopener noreferrer" href="/" onClick={this.handleLogin}><Icon type="logout" /> Login</a>
                </Menu.Item>
              }
            </Menu>
          }>
            <Avatar size="large" src="/img/user.jpg" />
          </Dropdown>
        </Layout>
      </Layout>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    workspace: state.ui.workspace
  };
};
const mapDispatch = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mapState, mapDispatch)(Header);