import React from 'react';
import { observer } from 'mobx-react-lite';
import formStore from '../../store/form-data';
import { useForm } from 'react-hook-form';

import styles from './Form.module.css';

const Form = observer(() => {
  const { register, handleSubmit } = useForm();
  const onSubmitForm = (data: any) => {
    console.log(data);
    formStore.setData(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
      <label className={styles.field} htmlFor="firstName">
        <p>First name:</p>
        <input className={styles.firstName} type="text" {...register('firstName')} />
      </label>

      <label className={styles.field} htmlFor="lastName">
        <p>Last name:</p>
        <input className={styles.lastName} type="text" {...register('lastName')} />
      </label>
 
      <label className={styles.field} htmlFor="birthDate">
        <p>Birth date:</p>
        <input className={styles.birthDate} type="date" {...register('birthDate')} />
      </label>

      <label className={styles.field} htmlFor="country">
      <p>Country:</p>
        <select className={styles.country} {...register('country')}>
          <option>Russia</option>
          <option>Ukraine</option>
          <option>Poland</option>
        </select>
      </label>

      <label className={[styles.field, styles.agreeWrapper].join(' ')} htmlFor="agree">
      <p>Agree with rules</p> 
        <input type="checkbox" className={styles.agree} {...register('agree')} />
      </label>

      <div>
        <input type="submit" value="Send" className={styles.send} />
      </div>
    </form>
  );
});

export default Form;
