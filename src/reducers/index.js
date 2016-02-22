import { combineReducers } from 'redux';
import ReducerPosts from './reducer_posts';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: ReducerPosts,
  form: FormReducer
});

export default rootReducer;
