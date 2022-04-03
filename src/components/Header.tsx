import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.brand}>Jokes 4 days</div>
      <nav>
        <Link to="/">Jokes</Link>
        <Link to="/library">Library</Link>
      </nav>
    </header>
  );
}
