import { combineReducers } from 'redux';
import user from 'store/reducers/user';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
