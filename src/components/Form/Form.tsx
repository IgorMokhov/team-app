import { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react';
import styles from './Form.module.css';

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

  const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHadler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
    </form>
  );
};
