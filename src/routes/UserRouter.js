import React from 'react';
import { connect } from 'dva';
import styles from './UserRouter.css';
import UserView from '../components/UserView';
import MainLayout from '../components/MainLayout/MainLayout';

function UserRouter(props) {

  let { location, dispatch, loading, users} = props;
  
  function handleDelete (id) {
  	dispatch({type: 'user/delete', payload: {id} })
  }

  return (
  <MainLayout location={location}>	
    <div className={styles.normal}>
      <UserView onDelete={handleDelete} {...props}/>
    </div>
   </MainLayout>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.user,
    users: state.user.users,
    page: state.user.page,
    total: state.user.page
  };
}

export default connect(mapStateToProps)(UserRouter);
