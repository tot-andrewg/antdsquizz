import React from 'react';
import SidebarMenu from './SidebarMenu';
import { Layout } from 'antd';
import { connect } from 'react-redux';

const { Sider } = Layout;

export class Sidebar extends React.Component {
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.props.ui.sidebar.secondSidebarOpen}
      >
        <div className="logo">
          {this.props.ui.sidebar.secondSidebarOpen && <img src="/img/squizz_logo_mini.png" style={{ height: '1.75rem' }} />}
          {!this.props.ui.sidebar.secondSidebarOpen && <img src="/img/squizz_logo.png" style={{ height: '1.75rem' }} />}
        </div>
        <SidebarMenu />
      </Sider>
    )
  }
}

const mapState = (state) => {
  return {
      ui: state.ui
  };
};

export default connect(mapState)(Sidebar);