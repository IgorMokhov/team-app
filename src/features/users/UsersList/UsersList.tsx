import { useEffect } from 'react';
import { Container } from '../../../components/Container/Container';
import { useAppDispatch } from '../../../redux-hooks';
import { getUsers } from '../users-async-actions';
import { useSelector } from 'react-redux';
import { selectUsers } from '../users-selectors';
import { UserCard } from '../UserCard/UserCard';
import styles from './UsersList.module.css';
import { RootState } from '../../../store';

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const usersList = useSelector(selectUsers);
  const token = useSelector((state: RootState) => state.user.token);
  console.log(token);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
