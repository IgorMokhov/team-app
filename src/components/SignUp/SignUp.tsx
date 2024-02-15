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
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
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

  const validateСonfirmPassword = (confirmPass: string) => {
    if (confirmPass !== password) {
      return 'Пароль должны совпадать';
    }

    return '';
  };

  const onSubmitHadler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateСonfirmPassword(confirmPassword);

    if (emailError || passwordError || confirmPasswordError) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      return;
    }

    dispatch(registerUser({ email, password }));
  };

  const onChangeEmailHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: validateEmail(e.target.value) });
  };

  const onChangePasswordHadler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: validatePassword(e.target.value) });
  };

  const onChangeConfirmPassHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setErrors({
      ...errors,
      confirmPassword: validateСonfirmPassword(e.target.value),
    });
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
      <label>
        Подтвердите пароль
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeConfirmPassHandler}
          placeholder="******"
        />
        {errors.confirmPassword && (
          <p className={styles.error}>{errors.confirmPassword}</p>
        )}
      </label>
      <input type="submit" value="Зарегистрироваться" />
      <p>Тестовая почта для регистрации: eve.holt@reqres.in</p>
    </form>
  );
};
