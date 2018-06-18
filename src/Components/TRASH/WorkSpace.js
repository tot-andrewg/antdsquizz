import React from 'react';
import { Menu, Icon } from 'antd';
import uuid from 'uuid';

export default class WorkSpace extends React.Component {
  constructor(props) {
    super(props);

    const tabsList = [
      {
        key: uuid(),
        icon: 'message',
        label: 'Squizz UI/UX'
      },
      {
        key: uuid(),
        icon: 'message',
        label: 'TOTECS Release QA Testing'
      },
      {
        key: uuid(),
        icon: 'user',
        label: 'Andrew Grant'
      },
      {
        key: uuid(),
        icon: 'message',
        label: 'Squizz Internal Discussion'
      }
    ];
    this.state = {
      current: 'mail',
      tabsList
    }
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="workspace-tabs"
      >
        {this.state.tabsList.map(tab => 
          <Menu.Item key={tab.key}>
            <Icon type={tab.icon} />
            <span className="workspace-tabs-label">{tab.label}</span>
            <Icon type="close" />
          </Menu.Item>
        )}  
      </Menu>
    );
  }
}