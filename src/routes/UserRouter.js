import React from 'react';
import { connect } from 'dva';
import styles from './UserRouter.css';
import UserView from '../components/UserView';
import MainLayout from '../components/MainLayout/MainLayout';

function UserRouter({location, dispatch, users}) {
  
  function handleDelete (id) {
  	dispatch({type: 'user/delete', payload: {id} })
  }

  return (
  <MainLayout location={location}>	
    <div className={styles.normal}>
      <UserView onDelete={handleDelete} users={users}/>
    </div>
   </MainLayout>
  );
}

function mapStateToProps({user: {users}}) {
  return {users};
}

export default connect(mapStateToProps)(UserRouter);
