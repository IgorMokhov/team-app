import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux-hooks';
import { loginUser } from '../../features/user/user-async-actions';
import { useAuth } from '../../hooks/use-auth';
import styles from './Login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHadler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  const onChangeEmailHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/users');
    }
  }, [isAuth]);

  return (
    <form className={styles.form} onSubmit={onSubmitHadler}>
      <h3>
        <Link to={'/'}>Регистрация</Link> / Авторизация
      </h3>

      <label>
        Электронная почта
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmailHadler}
          placeholder="example@mail.ru"
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangePasswordHadler}
          placeholder="******"
        />
      </label>
      <input type="submit" value="Войти" />
      <p>Тестовая почта для авторизации: eve.holt@reqres.in</p>
    </form>
  );
};
