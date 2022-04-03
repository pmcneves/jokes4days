import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setJoke } from '../store/actions/jokesActions';

export default function Jokes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJoke());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Jokes</div>;
}
