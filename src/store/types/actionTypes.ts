import { CategoriesTypes } from '../actions/jokesActions';

// Actions
type SetJoke = {
  type: CategoriesTypes.SetJoke;
};

type SetJokeSuccess = {
  type: CategoriesTypes.SetJokeSuccess;
  joke: any | null;
};

type SetJokeFailure = {
  type: CategoriesTypes.SetJokeFailure;
  error: any | null;
};

export type SetJokeActions = SetJoke | SetJokeSuccess | SetJokeFailure;

// Reducer
export type SetJokeReducer = {
  loading: boolean;
  joke: any | null;
  error: any | null;
};
