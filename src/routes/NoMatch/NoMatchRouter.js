import React from 'react';
import { connect } from 'dva';
import styles from './NoMatchRouter.css';



function NoMatchRouter({location}) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>No match for <code>{location.pathname}</code></h1>
      <div className={styles.nomatch} />
    </div>
  );
}


export default connect()(NoMatchRouter);