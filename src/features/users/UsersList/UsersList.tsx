import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../../../components/Container/Container';
import { useAppDispatch } from '../../../redux-hooks';
import { getUsers } from '../users-async-actions';
import { selectUsersInfo } from '../users-selectors';
import { UserCard } from '../UserCard/UserCard';
import { Button } from '../../../UI/Button/Button';
import iconLoadMore from '../../../assets/icons/iconLoadMore.svg';
import styles from './UsersList.module.css';

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const { usersList, totalPages, page } = useSelector(selectUsersInfo);

  useEffect(() => {
    if (usersList.length === 0) {
      dispatch(getUsers(page));
    }
  }, [dispatch, usersList.length]);

  return (
    <Container>
      <div className={styles.usersList}>
        {usersList.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {totalPages && page <= totalPages && (
        <Button
          className={styles.userListBtn}
          onClick={() => dispatch(getUsers(page))}
        >
          Показать еще
          <img src={iconLoadMore} alt="iconLoadMore" />
        </Button>
      )}
    </Container>
  );
};
