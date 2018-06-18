import React, { Component } from 'react';
import { Tabs, Icon, List, Avatar, Button, Spin } from 'antd';
import reqwest from 'reqwest';

const { TabPane } = Tabs;

const fakeDataUrl = 'https://randomuser.me/api/?results=10&inc=id,name,email,phone,picture&noinfo';

export default class ContactsPanel extends React.Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    data: [],
  }
  componentDidMount() {
    this.getData((res) => {
      this.setState({
        loading: false,
        data: res.results,
      });
    });
  }
  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }
  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        loadingMore: false,
      }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
  }
  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, marginBottom: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
      </div>
    ) : null;
    return (
      <div>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="Overview" key="2">Hi mum</TabPane>
          <TabPane tab="Me" key="1">
            <List
              className="demo-loadmore-list"
              loading={loading}
              itemLayout="horizontal"
              loadMore={loadMore}
              dataSource={data}
              renderItem={item => (
                <List.Item actions={[<Icon type="close-circle-o" />, <Icon type="right-circle-o" />]}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.thumbnail} />}
                    title={`${item.name.first} ${item.name.last}`}
                    description="Some conversation stuff"
                  />
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}