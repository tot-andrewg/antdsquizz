import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Header from '../Components/Navigation/Header';
import Sidebar from '../Components/Navigation/Sidebar';
import SecondarySidebar from '../Components/Navigation/SecondarySidebar';
import Breadcrumbs from '../Components/Navigation/Breadcrumbs';
import Footer from '../Components/Navigation/Footer';

import NewsFeed from '../Pages/NewsFeed';
import ConversationPage from '../Pages/ConversationPage';
import UserProfilePage from '../Pages/UserProfilePage';
import OrganisationProfilePage from '../Pages/OrganisationProfilePage';
import PublicPage from '../Pages/PublicPage';
import NotFound from '../Pages/NotFound';

const { Content } = Layout;

class AppRouter extends React.Component {
  render() {
    const userLoggedIn = !!this.props.user.id;
    return (
      <Router>
        <Layout style={{ height: '100vh' }}>
          {/* Only allow sidebar to render for logged in users */}
          {userLoggedIn && (
            <React.Fragment>
              <Sidebar />
              <SecondarySidebar />
            </React.Fragment>
          )}
          <Layout style={{ height: '100vh' }}>
            <Header />
            <Content style={{ margin: '0 0 0 0', height: 'calc(100vh - 64px)', overflow: 'auto' }}>
              <div style={{ height: '100%', padding: '1rem' }}>
                <Switch>
                  {/* Pages */}
                  <Route path="/user/:id" component={UserProfilePage} />
                  <Route path="/org/(:id)" component={OrganisationProfilePage} />
                  {/* Private pages */} {userLoggedIn &&
                  <React.Fragment>
                    <Route path="/" component={NewsFeed} exact={true} />
                    <Route path="/conversation/:id" component={ConversationPage} />
                  </React.Fragment>}
                  {/* Public pages */} {!userLoggedIn &&
                    <React.Fragment>
                    <Route path="/" component={PublicPage} />
                  </React.Fragment>}
                  {/* 404 */}
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

const mapState = (state) => {
  return {
    ui: state.ui,
    user: state.user
  };
};

export default connect(mapState)(AppRouter);