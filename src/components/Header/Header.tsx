import { Container } from '../Container/Container';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <h1>Наша команда</h1>
          <p>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
          <button>Выход</button>
        </div>
      </Container>
    </header>
  );
};
