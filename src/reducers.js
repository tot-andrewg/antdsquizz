import { combineReducers } from 'redux';
import ui from './reducers/ui';
import user from './reducers/user';
import conversations from './reducers/conversations';

export default combineReducers({
    ui,
    user,
    conversations
})