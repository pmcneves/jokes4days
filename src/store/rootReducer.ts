import { combineReducers } from 'redux';
import { jokesReducer } from './reducers/jokesReducer';

const rootReducer = combineReducers({
  jokes: jokesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
