import { combineReducers } from 'redux';
import authUser from './auth';
import tweets from './tweets';
import users from './users';

export default combineReducers({ authUser, users, tweets });
