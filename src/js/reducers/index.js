import { combineReducers } from 'redux';

import user from './userReducers';
import tweets from './tweetsReducers';

export default combineReducers({
  user,
  tweets
})
