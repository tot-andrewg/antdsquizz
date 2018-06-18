import React from 'react';
import { Layout, Icon, Input } from 'antd';
import { connect } from 'react-redux';
import ConversationsPanel from '../Panels/ConversationsPanel';
import { closeSidebar } from '../../actions/ui';

const { Content } = Layout;

export class SecondarySidebar extends React.Component {
  handlePanelClose = () => {
    this.props.closeSidebar();
  };
  render() {
    const sidebar = this.props.ui.sidebar;
    return (
      <Layout className={sidebar.secondSidebarOpen ? 'menu__secondary menu__secondary--visible' : 'menu__secondary menu__secondary--hidden'}>
        <div style={{ padding: '1rem', display: 'flex', alignItems: 'baseline', maxHeight: '64px', background: 'rgb(0, 21, 42)', color: 'white' }}>
          <h2 style={{ flex: '1 0 auto', marginBottom: 0, color: 'inherit' }}>Conversations</h2>
          <a onClick={this.handlePanelClose} style={{ padding: '0.25rem 0.5rem', border: '1px solid rgba(255, 255, 255, 0.65)', borderRadius: '1rem', color: 'rgba(255, 255, 255, 0.65)', }}><Icon type="close" /></a>
        </div>
        <Content style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
          <Input addonAfter={<Icon type="search" />} placeholder="Search" style={{ margin: '0.5rem', width: 'calc(100% - 1rem)' }} />
          <ConversationsPanel />
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui
});
const mapDispatchToProps = (dispatch) => ({
  closeSidebar() {
    dispatch(closeSidebar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondarySidebar);