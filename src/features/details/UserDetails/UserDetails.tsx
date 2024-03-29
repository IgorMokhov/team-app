import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectDetails } from '../details-selectors';
import { useAppDispatch } from '../../../redux-hooks';
import { getDetailsUser } from '../details-async-actions';
import { clearDetailsUser } from '../details-slice';
import { Container } from '../../../components/Container/Container';
import { UseLogout } from '../../../hooks/use-logout';
import { Button } from '../../../UI/Button/Button';
import iconBack from '../../../assets/icons/iconBack.svg';
import iconLogout from '../../../assets/icons/iconLogout.svg';
import styles from './UserDetails.module.css';

export const UserDetails = () => {
  const { id } = useParams() as { id: string };
  const { loading, user, error } = useSelector(selectDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = UseLogout();

  useEffect(() => {
    dispatch(getDetailsUser(id));

    return () => {
      dispatch(clearDetailsUser());
    };
  }, [id, dispatch]);

  if (loading === 'failed' && error !== null) {
    // there may be some kind of error handling here
    navigate('/users');
  }

  return (
    <>
      <div className={styles.headerWrapper}>
        <Container>
          <div className={styles.userDetailsHeader}>
            <Button
              className={styles.userBtnBack}
              onClick={() => navigate('/users')}
            >
              <span className={styles.userBackText}>Назад</span>
              <img
                className={styles.userBackIcon}
                src={iconBack}
                alt="iconBack"
              />
            </Button>
            {user && (
              <>
                <img
                  className={styles.userAvatar}
                  src={user.avatar}
                  alt="avatar"
                />
                <h2
                  className={styles.userTitle}
                >{`${user.firstName} ${user.lastName}`}</h2>
              </>
            )}
            <Button className={styles.userBtnLogout} onClick={() => logout()}>
              <span className={styles.userLogoutText}>Выход</span>
              <img
                className={styles.userLogoutIcon}
                src={iconLogout}
                alt="iconLogout"
              />
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        <div className={styles.userDetailsBody}>
          <div className={styles.userDetailsText}>
            <p>
              Клиенты видят в нем эксперта по вопросам разработки комплексных
              решений финансовых продуктов, включая такие аспекты, как
              организационная структура, процессы, аналитика и ИТ-компоненты. Он
              помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и
              увеличивать продажи, используя самые современные аналитические
              инструменты.
            </p>
            <p>
              В работе с клиентами недостаточно просто решить конкретную
              проблему или помочь справиться с трудностями. Не менее важно
              уделять внимание обмену знаниями: "Один из самых позитивных
              моментов — это осознание того, что ты помог клиенту перейти на
              совершенно новый уровень компетентности, уверенность в том, что
              после окончания проекта у клиента есть все необходимое, чтобы
              дальше развиваться самостоятельно".
            </p>
            <p>
              Помимо разнообразных проектов для клиентов финансового сектора,
              Сорин ведет активную предпринимательскую деятельность. Он является
              совладельцем сети клиник эстетической медицины в Швейцарии,
              предлагающей инновационный подход к красоте, а также инвестором
              других бизнес-проектов.
            </p>
          </div>
          <div className={styles.userDetailsContacts}>
            <div className={styles.userDetailsPhone}>+7 (954) 333-44-55</div>
            <div>{user?.email}</div>
          </div>
        </div>
      </Container>
    </>
  );
};
