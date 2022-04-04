import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJoke } from '../store/actions/jokesActions';
import { selectJoke, selectJokeError, selectJokeLoading } from '../store/selectors/jokesSelectors';

export default function Jokes() {
  const dispatch = useDispatch();
  const joke = useSelector(selectJoke);
  const jokeLoading = useSelector(selectJokeLoading);
  const jokeError = useSelector(selectJokeError);

  useEffect(() => {
    console.log(joke);
  }, [joke]);

  useEffect(() => {
    dispatch(setJoke());
  }, [dispatch]);

  const loadedEl = jokeError ? <p>error</p> : <p>{joke?.category}</p>;

  const hasLoadedCheck = jokeLoading ? <p>loading</p> : loadedEl;

  return <section>{hasLoadedCheck}</section>;
}
