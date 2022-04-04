import { getJoke, getJokeError, getJokeLoading } from '../reducers/jokesReducer';
import { RootState } from '../rootReducer';

export const selectJoke = (state: RootState) => getJoke(state.jokes);
export const selectJokeLoading = (state: RootState) => getJokeLoading(state.jokes);
export const selectJokeError = (state: RootState) => getJokeError(state.jokes);
