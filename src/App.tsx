import React from 'react';

import Form from './components/Form/Form';
import Output from './components/Output/Output';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>React Hook Form</h1>
      <Form />
      <Output />
    </div>
  );
}

export default App;
