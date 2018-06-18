import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import { connect } from 'react-redux';
import { setSecondarySidebar } from '../../actions/ui';

const menuItems = [
  {
    key: 1,
    label: 'Contacts',
    icon: 'user',
    notifications: {
      personal: 1,
      org: 0
    }
  },{
    key: 2,
    label: 'Organisations',
    icon: 'team',
    notifications: {
      personal: 0,
      org: 0
    }
  },{
    key: 3,
    label: 'Conversations',
    icon: 'message',
    notifications: {
      personal: 4,
      org: 2
    }
  },{
    key: 4,
    label: 'Basket',
    icon: 'shopping-cart',
    notifications: {
      personal: 0,
      org: 1
    }
  },{
    key: 5,
    label: 'Accounts',
    icon: 'book',
    notifications: {
      personal: 1,
      org: 0
    }
  },{
    key: 6,
    label: 'Purchase Orders',
    icon: 'right-circle-o',
    notifications: {
      personal: 1,
      org: 0
    }
  },{
    key: 7,
    label: 'Sales Orders',
    icon: 'left-circle-o',
    notifications: {
      personal: 0,
      org: 1
    }
  }
];

export class SidebarMenu extends React.Component {
  handlePanelChange = (sidebar) => {
    this.props.setSecondarySidebar({
      sidebarOpen: !sidebar.key,
      secondSidebarOpen: !!sidebar.key,
      secondSidebarKey: sidebar.key
    });
  };
  render() {
    return (
      <Menu
        theme="dark"  
        mode="vertical"
        defaultSelectedKeys={[this.props.sidebar.secondSidebarKey]}
        style={{ borderRight: 0 }}
      >
        {menuItems.map((menuItem) => {
          return (
            <Menu.Item key={menuItem.key} onClick={this.handlePanelChange}>
              <Icon type={menuItem.icon} /> 
              <span style={{ display: 'inline-flex', flexDirection: 'row', width: 'calc(100% - 1rem)' }}>
                <span style={{ flexGrow: 1 }}>{menuItem.label}</span> 
                <span style={{ flexShrink: 1 }}>
                  {!!menuItem.notifications.personal && <Badge dot status="warning" />}
                  {!!menuItem.notifications.org && <Badge dot status="error" />}
                </span>
              </span>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
}

const mapState = (state) => {
  return {
      sidebar: state.ui.sidebar
  };
};
// const mapDispatch = (dispatch) => ({
//   setSecondarySidebar(sidebar) {
//     dispatch(setSecondarySidebar(sidebar))
//   },
// });

export default connect(
  mapState,
  { setSecondarySidebar: setSecondarySidebar }
)(SidebarMenu);