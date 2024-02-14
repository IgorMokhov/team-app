import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux-hooks';
import { registerUser } from '../../features/user/user-async-actions';
import styles from './SignUp.module.css';
import { useAuth } from '../../hooks/use-auth';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHadler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(registerUser({ email, password }));
  };

  const onChangeEmailHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/users');
    }
  }, [isAuth]);

  return (
    <form className={styles.form} onSubmit={onSubmitHadler}>
      <h3>
        Регистрация / <Link to={'/login'}>Авторизация</Link>
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
      <label>
        Подтвердите пароль
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeConfirmPassHandler}
          placeholder="******"
        />
      </label>
      <input type="submit" value="Зарегистрироваться" />
      <p>Тестовая почта для регистрации: eve.holt@reqres.in</p>
    </form>
  );
};
