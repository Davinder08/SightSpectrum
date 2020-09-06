import {combineReducers} from 'redux';
import UserDetailReducer from './UserDetailReducer';

const appReducer = combineReducers({
  UserDetailReducer,
});

export default RootReducer = (state, action) => {
  return appReducer(state, action);
};
