import React from 'react';
import { connect } from 'dva';
import LoginView from '../../components/Login/LoginView';

import styles from './LoginRouter.css';

function LoginRouter(props) {
  
  return (
      <div className={styles.normal}>
       	<LoginView {...props}/>
      </div>

  );
}

export default connect()(LoginRouter);