import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../Components/Profiles/UserProfile';

export class UserProfilePage extends React.Component {
  render() {
    return (
      <div>
        <UserProfile user={this.props.user} />
      </div>
    )
  }
}

const mapState = (state, props) => ({
  user: state.user
});

export default connect(mapState)(UserProfilePage);