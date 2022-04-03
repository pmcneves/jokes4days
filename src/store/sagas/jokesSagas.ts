import { call, put, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { CategoriesTypes } from '../actions/jokesActions';

function* getJoke(): SagaIterator {
  try {
    const res = yield call(() =>
      fetch('https://v2.jokeapi.dev/joke/Any')
        .then((response) => response.json())
        .then((myJson) => myJson)
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

export default function* jokeSagas(): SagaIterator {
  yield takeLatest(CategoriesTypes.SetJoke, getJoke);
}
