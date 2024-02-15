import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux-hooks';
import { loginUser } from '../../features/user/user-async-actions';
import { useAuth } from '../../hooks/use-auth';
import styles from './Login.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    if (!email) {
      return 'Email не может быть пустым';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Некорректный формат email';
    }

    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return 'Пароль не может быть пустым';
    } else if (password.length < 6) {
      return 'Пароль должен быть длиннее 6 символов';
    }

    return '';
  };

  const onSubmitHadler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    dispatch(loginUser({ email, password }));
  };

  const onChangeEmailHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: validateEmail(e.target.value) });
  };

  const onChangePasswordHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: validatePassword(e.target.value) });
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
        {errors.email && <p className={styles.error}>{errors.email}</p>}
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
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </label>
      <input type="submit" value="Войти" />
      <p>Тестовая почта для авторизации: eve.holt@reqres.in</p>
    </form>
  );
};
