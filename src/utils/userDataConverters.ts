import { LocalUser, ReqresUser } from '../types';

// Transforms an array of objects of type ReqresUser into an array of objects of type LocalUser.
export const extractLocalUsers = (users: ReqresUser[]): LocalUser[] => {
  return users.map((user) => ({
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar,
  }));
};

// Transforms an object of type ReqresUser into an object of type LocalUser.
export const extractLocalUser = (user: ReqresUser): LocalUser => ({
  id: user.id,
  email: user.email,
  firstName: user.first_name,
  lastName: user.last_name,
  avatar: user.avatar,
});
