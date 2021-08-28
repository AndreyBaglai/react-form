import React from 'react';
import { observer } from 'mobx-react-lite';
import formStore from '../../store/form-data';
import { useForm } from 'react-hook-form';
import {
  EMAIL_PATTERN,
  MAX_AGE,
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_NAME,
  MIN_AGE,
  MIN_LENGTH_EMAIL,
} from '../../variables/variables';

import styles from './Form.module.css';

type FormData = {
  name: string;
  email: string;
  age: number;
  birthDate: string;
  country: string;
  agree: boolean;
};

const Form = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmitForm = (data: any) => {
    formStore.setData(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
      <label className={styles.field} htmlFor="name">
        <p>Your name:</p>
        <input
          placeholder="Name..."
          className={styles.name}
          type="text"
          {...register('name', {
            required: 'Please, input your name',
            maxLength: {
              value: MAX_LENGTH_NAME,
              message: `Name can not be more ${MAX_LENGTH_NAME} symbols`,
            },
          })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </label>

      <label className={styles.field} htmlFor="email">
        <p>Email:</p>
        <input
          placeholder="Email..."
          className={styles.email}
          type="email"
          {...register('email', {
            required: 'Please, input your email address',
            pattern: { value: EMAIL_PATTERN, message: 'Incorrect email address' },
            maxLength: {
              value: MAX_LENGTH_EMAIL,
              message: `Email can not be more ${MAX_LENGTH_EMAIL} symbols`,
            },
            minLength: {
              value: MIN_LENGTH_EMAIL,
              message: `Email must be more ${MIN_LENGTH_EMAIL} symbols`,
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </label>

      <label className={styles.field} htmlFor="age">
        <p>Age:</p>
        <input
          placeholder="Age..."
          className={styles.age}
          type="number"
          {...register('age', {
            required: 'Input your age',
            min: { value: MIN_AGE, message: `You age must be more or equal ${MIN_AGE}` },
            max: { value: MAX_AGE, message: `You so old, max age ${MAX_AGE}` },
          })}
        />
        {errors.age && <p className={styles.error}>{errors.age.message}</p>}
      </label>

      <label className={styles.field} htmlFor="birthDate">
        <p>Birth date:</p>
        <input
          placeholder="Birth date"
          className={styles.birthDate}
          type="date"
          {...register('birthDate')}
        />
      </label>

      <label className={styles.field} htmlFor="country">
        <p>Country:</p>
        <select className={styles.country} {...register('country')}>
          <option value="England">England</option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
        </select>
      </label>

      <label className={[styles.field, styles.agreeWrapper].join(' ')} htmlFor="agree">
        {errors.agree && <p className={styles.error}>{errors.agree.message}</p>}
        <p className={styles.agreeText}>Agree with rules</p>
        <input
          type="checkbox"
          className={styles.agree}
          {...register('agree', { required: 'Must be checked' })}
        />
      </label>

      <div>
        <input type="submit" value="Send" className={styles.send} />
      </div>
    </form>
  );
});

export default Form;
