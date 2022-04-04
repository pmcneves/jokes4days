import { call, takeLatest, put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import jokeServices from '../../core/services/jokeServices';
import { CategoriesTypes, setJokeFailure, setJokeSuccess } from '../actions/jokesActions';

function* getJoke(): SagaIterator {
  try {
    const res = yield call(jokeServices.getNewJoke);
    yield put(setJokeSuccess(res));
  } catch (e: any) {
    yield put(setJokeFailure({ message: e.message, status: e.status }));
  }
}

export default function* jokeSagas(): SagaIterator {
  yield takeLatest(CategoriesTypes.SetJoke, getJoke);
}
