import React, { useState } from 'react';

import Form from './components/Form/Form';
import Output from './components/Output/Output';

import styles from './App.module.css';

function App() {
  const [formValues, setFormValues] = useState([]);
  return (
    <div className={styles.app}>
      <Form setFormValues={setFormValues}/>
      <Output output={formValues} />
    </div>
  );
}

export default App;
