import Nav from './Nav';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.brand}>Jokes 4 days</div>
      <Nav />
    </header>
  );
}
