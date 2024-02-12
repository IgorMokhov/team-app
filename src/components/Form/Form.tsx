import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Form.module.css';
import { useAppDispatch } from '../../redux-hooks';
import { registerUser } from '../../features/user/user-async-actions';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useAppDispatch();

  const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHadler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      registerUser({
        email: formData.email,
        password: formData.password,
      })
    );
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHadler}>
      <h3>Регистрация</h3>

      <label>
        Имя
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChangeHadler}
          placeholder="Артур"
        />
      </label>
      <label>
        Электронная почта
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHadler}
          placeholder="example@mail.ru"
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChangeHadler}
          placeholder="******"
        />
      </label>
      <label>
        Подтвердите пароль
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChangeHadler}
          placeholder="******"
        />
      </label>
      <input type="submit" value="Зарегистрироваться" />
      <p>Тестовая почта для регистрации: eve.holt@reqres.in</p>
    </form>
  );
};