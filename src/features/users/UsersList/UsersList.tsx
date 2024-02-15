import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../../../components/Container/Container';
import { useAppDispatch } from '../../../redux-hooks';
import { getUsers } from '../users-async-actions';
import { selectUsers } from '../users-selectors';
import { UserCard } from '../UserCard/UserCard';
import styles from './UsersList.module.css';

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const usersList = useSelector(selectUsers);

  useEffect(() => {
    if (usersList.length === 0) {
      dispatch(getUsers());
    }
  }, [dispatch, usersList.length]);

  return (
    <Container>
      <div className={styles.usersList}>
        {usersList.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </Container>
  );
};
