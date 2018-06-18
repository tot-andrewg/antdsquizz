import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { setWorkspaceKey } from '../../actions/ui';
import { connect } from 'react-redux';

class WorkspaceTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: this.props.workspace.activeKey,
      tabList: this.props.tabList
    }
  }
  iconMap = {
    conversation: 'message',
    user: 'user',
    feed: 'notification',
    organisation: 'team',
    dashboard: 'dashboard',
    home: 'home'
  }
  setActive = (tab) => {
    const activeKey = tab.key;
    this.props.setWorkspaceKey({
      activeKey
    });
  }
  render() {
    return (
      <Menu
        onClick={this.setActive}
        selectedKeys={[this.props.workspace.activeKey]}
        theme="dark"
        mode="horizontal"
        className="workspace-tabs"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key='0'>
          <Link to='/'>
            <Icon type={this.iconMap.home} />
            <span className="workspace-tabs-label">Home</span>
            {/*<Icon type="close" />*/}
          </Link>
        </Menu.Item>
        {this.state.tabList.map(tab =>
          <Menu.Item key={tab.id}>
            <Link to={`/${tab.type}/${tab.id}`}>
              {/* Get icon based on the tab type */}
              <Icon type={this.iconMap[tab.type]} />
              <span className="workspace-tabs-label">{tab.label}</span>
              {/*<Icon type="close" />*/}
            </Link>
          </Menu.Item>
        )}
      </Menu>
    );
  }
}

const mapState = (state) => ({
  workspace: state.ui.workspace
});
const mapDispatch = (dispatch) => ({
  setWorkspaceKey: (key) => dispatch(setWorkspaceKey(key))
});

export default connect(mapState, mapDispatch)(WorkspaceTabs);