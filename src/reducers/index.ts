import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments });
export default rootReducer;
// routing: routerReducer
// import { routerReducer } from 'react-router-redux';
