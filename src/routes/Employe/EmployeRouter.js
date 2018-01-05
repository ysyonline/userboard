import React from 'react';
import { connect } from 'dva';
import EmployeView from '../../components/Employe/EmployeView';
import MainLayout from '../../components/MainLayout/MainLayout';

import styles from './EmployeRouter.css';

function EmployeRouter(props) {
  return (
    <MainLayout location={props.location} dispatch={props.dispatch}>	
      <div className={styles.normal}>
       	<EmployeView />
      </div>
     </MainLayout>
  );
}

export default connect()(EmployeRouter);