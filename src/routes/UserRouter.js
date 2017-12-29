import React from 'react';
import { connect } from 'dva';
import styles from './UserRouter.css';
import UserView from '../components/UserView'

function UserRouter({dispatch, users}) {
  
  function handleDelete (id) {
  	dispatch({type: 'user/delete', payload: {id} })
  }

  return (
    <div className={styles.normal}>
      <UserView onDelete={handleDelete} users={users}/>
    </div>
  );
}

function mapStateToProps({user: {users}}) {
  return {users};
}

export default connect(mapStateToProps)(UserRouter);
