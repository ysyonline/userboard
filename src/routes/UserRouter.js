import React from 'react';
import { connect } from 'dva';
import styles from './UserRouter.css';
import UserView from '../components/UserView';
import MainLayout from '../components/MainLayout/MainLayout';

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
