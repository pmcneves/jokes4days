import { Outlet } from 'react-router';
import Header from './Header';
import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <main>
      <div className={styles.brand}>Jokes 4 days</div>
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
    </main>
  );
}
