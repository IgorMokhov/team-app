import { logoutUser } from '../features/user/user-slice';
import { clearUsers } from '../features/users/users-slice';
import { useAppDispatch } from '../redux-hooks';

export const UseLogout = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutUser());
    dispatch(clearUsers());
  };

  return logout;
};
