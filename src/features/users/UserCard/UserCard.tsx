import { Link } from 'react-router-dom';
import iconLike from '../../../assets/icons/iconLike.svg';
import iconLiked from '../../../assets/icons/iconLiked.svg';
import { useAppDispatch } from '../../../redux-hooks';
import styles from './UserCard.module.css';
import { toggleLike } from '../users-slice';

interface UserCardProps {
  avatar: string;
  firstName: string;
  lastName: string;
  id: number;
  like: boolean;
}

export const UserCard = ({
  avatar,
  firstName,
  lastName,
  id,
  like,
}: UserCardProps) => {
  const dispatch = useAppDispatch();

  const handleToggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(toggleLike(id));
  };

  return (
    <Link className={styles.userCard} to={`/users/${id}`}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <h4>{`${firstName} ${lastName}`}</h4>
      <button className={styles.likeBtn} onClick={handleToggleLike}>
        {like ? (
          <img src={iconLiked} alt="iconLiked" />
        ) : (
          <img src={iconLike} alt="iconLike" />
        )}
      </button>
    </Link>
  );
};
