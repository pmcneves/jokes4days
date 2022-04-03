import clsx from 'clsx';
import { NavLink, useResolvedPath, useMatch } from 'react-router-dom';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? clsx(styles.item, styles['item--active']) : styles.item)}
        to="/">
        Jokes
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? clsx(styles.item, styles.active) : styles.item)} to="/library">
        Library
      </NavLink>
    </nav>
  );
}
