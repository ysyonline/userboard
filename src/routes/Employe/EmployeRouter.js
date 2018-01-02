import React from 'react';
import { connect } from 'dva';
import EmployeView from '../../components/Employe/EmployeView';
import MainLayout from '../../components/MainLayout/MainLayout';

function EmployeRouter(props) {
  
  return (
    <MainLayout location={props.location}>	
      <div>
       	<EmployeView />
      </div>
     </MainLayout>
  );
}

export default connect()(EmployeRouter);