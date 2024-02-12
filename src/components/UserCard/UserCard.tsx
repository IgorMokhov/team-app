import styles from './UserCard.module.css';
import { Link } from 'react-router-dom';

interface UserCardProps {
  avatar: string;
  firstName: string;
  lastName: string;
  id: number;
}

export const UserCard = ({
  avatar,
  firstName,
  lastName,
  id,
}: UserCardProps) => {
  return (
    <Link className={styles.userCard} to={`/users/${id}`}>
      <img src={avatar} alt="avatar" />
      <h4>{`${firstName} ${lastName}`}</h4>
    </Link>
  );
};
