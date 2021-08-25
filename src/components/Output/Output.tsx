import React from 'react';

import styles from './Output.module.css';

type OutputProps = {
  output: any;
};

export default function Output({ output }: OutputProps) {
  return (
    <div className={styles.output}>
      Output: {output.length > 0 ? output.map((value: any) => value) : ''}
    </div>
  );
}
