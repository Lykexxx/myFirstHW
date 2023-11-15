import React from 'react';
import styles from './header.module.css';
import Button from '../../UI/button/Button';

const Header = ({children, user}) => {

  return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <h2>Logo</h2>
        </div>
        <div className={styles.user}>{user}</div>
        <nav>
          <ul className={styles.list}>
            {children}
          </ul>
        </nav>
      </header>
  );
};

export default Header;
