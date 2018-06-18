import React from 'react';
import { Icon } from 'antd';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {!!this.props.user &&
          <div>
            <p>The user: <strong>{this.props.user.name.first}</strong> has an ID of: <strong>{this.props.user.id}</strong></p>
            {/*this.props.conversation.users.map(user => 
              <div>
                <Icon type="user" />
                {`${user.name.first} ${user.name.last}`}
              </div>
            )*/}
          </div>
        }
        {!this.props.user &&
          <p>The user could not be loaded</p>
        }
      </div>
    )
  }
}