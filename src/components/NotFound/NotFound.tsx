import { useNavigate } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Button } from '../../UI/Button/Button';
import iconBack from '../../assets/icons/iconBack.svg';
import styles from './NotFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <Container>
        <div className={styles.notFoundInner}>
          <Button className={styles.notFoundBtn} onClick={() => navigate('/')}>
            <span>На главную</span>
            <img src={iconBack} alt="iconBack" />
          </Button>
          <h2>Страница не найдена</h2>
        </div>
      </Container>
    </div>
  );
};
