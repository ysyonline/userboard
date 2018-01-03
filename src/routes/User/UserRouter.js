import React from 'react';
import { connect } from 'dva';
import UserView from '../../components/User/UserView';
import MainLayout from '../../components/MainLayout/MainLayout';

import styles from './UserRouter.css';

function UserRouter(props) {
  
  return (
    <MainLayout location={props.location}>	
      <div className={styles.normal}>
        <UserView/>
      </div>
     </MainLayout>
  );
}

export default connect()(UserRouter);
