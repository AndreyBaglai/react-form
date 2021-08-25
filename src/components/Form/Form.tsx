import React, { useEffect, useState } from 'react';
import styles from './Form.module.css';

type FormProps = {
  setFormValues: (state: any) => void;
};

type ErrorsType = {
  agree?: any;
  firstName?: string;
  birthDate?: string;
}

export default function Form({ setFormValues }: FormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Ukraine');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<ErrorsType>({});

  useEffect(() => {
    validate();
  }, [agree, firstName, birthDate]);

  const validate = () => {
    setErrors({});
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName }));
    }
    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate }));
    }
  };


  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setCountry('Ukraine');
    setAgree(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state: any) => [...state, { firstName, lastName, birthDate, country, agree }]);
      reset();
    }
  };

  const handleFirstName = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFirstName(target.value);
  };

  const handleLastName = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setLastName(target.value);
  };

  const handleBirthDate = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setBirthDate(target.value);
  };

  const handleCountry = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    setCountry(target.value);
  };

  const handleAgree = () => {
    setAgree((prev) => !prev);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field} htmlFor="firstName">
        <p>Name: {errors.firstName && <span>* name should be fill</span>}</p>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
      </label>

      <label className={styles.field} htmlFor="lastName">
        <p>Surname:</p>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
      </label>

      <label className={styles.field} htmlFor="birthDate">
        <p>Birth date: {errors.birthDate && <span>* birth date should be fill</span>}</p>
        <input type="date" name="birthDate" value={birthDate} onChange={handleBirthDate} />
      </label>

      <label className={styles.field} htmlFor="country">
        <select name="country" value={country} onChange={handleCountry}>
          <option>Russia</option>
          <option>Ukraine</option>
          <option>Poland</option>
        </select>
      </label>

      <label className={styles.field} htmlFor="agree">
        <p>This box i agree... {errors?.agree !== undefined && <span className={styles.error}>* agree should be check</span>}</p>
        <input type="checkbox" name="agree" checked={agree} onChange={handleAgree} />
      </label>

      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}
