import React from 'react';
import { Icon } from 'antd';

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {!!this.props.conversation &&
          <div>
            <p>The conversation: <strong>{this.props.conversation.label}</strong> has an ID of: <strong>{this.props.conversation.id}</strong></p>
            {/*this.props.conversation.users.map(user => 
              <div>
                <Icon type="user" />
                {`${user.name.first} ${user.name.last}`}
              </div>
            )*/}
          </div>
        }
        {!this.props.conversation &&
          <p>The conversation could not be loaded</p>
        }
      </div>
    )
  }
}