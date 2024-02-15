import { Container } from '../Container/Container';
import { Button } from '../../UI/Button/Button';
import { UseLogout } from '../../hooks/use-logout';
import styles from './Header.module.css';

export const Header = () => {
  const logout = UseLogout();

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
          <Button className={styles.headerLogoutBtn} onClick={() => logout()}>
            Выход
          </Button>
        </div>
      </Container>
    </header>
  );
};
