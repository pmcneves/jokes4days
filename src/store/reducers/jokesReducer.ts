import { CategoriesTypes } from '../actions/jokesActions';
import { SetJokeActions, SetJokeReducer } from '../types/actionTypes';

const initialState: SetJokeReducer = {
  loading: false,
  joke: null,
  error: null,
};

export const jokesReducer = (state = initialState, action: SetJokeActions): SetJokeReducer => {
  switch (action.type) {
    case CategoriesTypes.SetJoke:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CategoriesTypes.SetJokeSuccess:
      return {
        ...state,
        loading: false,
        joke: action.joke,
      };
    case CategoriesTypes.SetJokeFailure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
