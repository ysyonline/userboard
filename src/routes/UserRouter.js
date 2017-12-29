import React from 'react';
import { connect } from 'dva';
import styles from './UserRouter.css';
import UserView from '../components/UserView'

function UserRouter() {
  return (
    <div className={styles.normal}>
      <UserView />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserRouter);
