import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { selectDetails } from '../details-selectors';
import { useAppDispatch } from '../../../redux-hooks';
import { getDetailsUser } from '../details-async-actions';
import { clearDetailsUser } from '../details-slice';
import { Container } from '../../../components/Container/Container';
import styles from './UserDetails.module.css';
import { logOut } from '../../user/user-slice';

export const UserDetails = () => {
  const { id } = useParams() as { id: string };
  const { loading, user, error } = useSelector(selectDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetailsUser(id));

    return () => {
      dispatch(clearDetailsUser());
    };
  }, [id, dispatch]);

  if (loading === 'failed' && error !== null) {
    console.log(error);
    navigate('/users');
  }

  return (
    <>
      <div className={styles.headerWrapper}>
        <Container>
          <div className={styles.userDetailsHeader}>
            <button onClick={() => navigate('/users')}>Назад</button>
            {user && (
              <>
                <img src={user.avatar} alt="avatar" />
                <h2>{`${user.firstName} ${user.lastName}`}</h2>
              </>
            )}
            <button onClick={() => dispatch(logOut())}>Выход</button>
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
          <div>
            <div className={styles.userDetailsPhone}>+7 (954) 333-44-55</div>
            <div>{user?.email}</div>
          </div>
        </div>
      </Container>
    </>
  );
};
