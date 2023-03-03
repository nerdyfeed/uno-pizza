import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <span>🛑</span>
      <br />
      <h1>Ошибка 404</h1>
      <p className={styles.description}>Ничего не найдено</p>
      <Link className="button button--black" to="/">Вернуться на главную</Link>
    </div>
  );
}
