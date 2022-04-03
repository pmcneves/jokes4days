import { all } from 'redux-saga/effects';
import jokeSagas from './sagas/jokesSagas';

export default function* sagas(): Generator {
  yield all([jokeSagas()]);
}
