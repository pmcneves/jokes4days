export enum CategoriesTypes {
  SetJoke = 'SET_JOKE',
  SetJokeSuccess = 'SET_JOKE_SUCCESS',
  SetJokeFailure = 'SET_JOKE_FAILURE',
}

export const setJoke = () => ({
  type: CategoriesTypes.SetJoke,
});

export const setJokeSuccess = (joke: any) => ({
  type: CategoriesTypes.SetJokeSuccess,
  joke,
});

export const setJokeFailure = (error: any) => ({
  type: CategoriesTypes.SetJokeFailure,
  error,
});
