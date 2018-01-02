import React from 'react';
import { connect } from 'dva';
//import UserView from '../../components/UserView';
import MainLayout from '../../components/MainLayout/MainLayout';

function EmployRouter(props) {
  
  return (
    <MainLayout location={props.location}>	
      <div>
        employe Router
      </div>
     </MainLayout>
  );
}

export default connect()(EmployRouter);