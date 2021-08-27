import React from 'react';
import { observer } from 'mobx-react-lite';
import formStore from '../../store/form-data';

import styles from './Output.module.css';

const Output = observer(() => {
  return (
    <div className={styles.output}>
      <h2>Output</h2>
      <code className={styles.code}>{JSON.stringify(formStore.allData, null, '  ')}</code>
    </div>
  );
});

export default Output;
