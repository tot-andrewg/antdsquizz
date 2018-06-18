import React from 'react';
import { connect } from 'react-redux';
import Conversation from '../Components/Conversations/Conversation';

export class ConversationPage extends React.Component {
  render() {
    return (
      <div>
        <Conversation conversation={this.props.conversation} />
      </div>
    )
  }
}

const mapState = (state, props) => ({
  conversation: state.conversations.find((conversation) => conversation.id === props.match.params.id)
});

export default connect(mapState)(ConversationPage);