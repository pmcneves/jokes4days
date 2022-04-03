import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setJoke } from '../store/actions/jokesActions';

export default function Jokes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setJoke());
  }, []);

  return <div>Jokes</div>;
}
