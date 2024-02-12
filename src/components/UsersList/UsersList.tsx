import { useEffect } from 'react';
import { Container } from '../Container/Container';
import { useAppDispatch } from '../../redux-hooks';
import { getUsers } from '../../features/users/users-async-actions';
import styles from './UsersList.module.css';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../features/users/users-selectors';
import { UserCard } from '../UserCard/UserCard';

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const usersList = useSelector(selectUsers);
  console.log(usersList);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Container>
      <div className={styles.usersList}>
        {usersList.map((user) => (
          <UserCard {...user} />
        ))}
      </div>
    </Container>
  );
};
