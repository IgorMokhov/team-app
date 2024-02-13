import { Header } from '../components/Header/Header';
import { UsersList } from '../features/users/UsersList/UsersList';

export const MainPage = () => {
  return (
    <>
      <Header />
      <UsersList />
    </>
  );
};
