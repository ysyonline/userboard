import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Pagination} from 'antd'; 
import MainLayout from '../components/MainLayout/MainLayout';


function IndexPage({location}) {
  return (
  <MainLayout location={location}>
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
    <Pagination
      total={85}
      showTotal={total => `Total ${total} items`}
      pageSize={20}
      defaultCurrent={1}
    />
  </MainLayout>
  );
}


export default connect()(IndexPage);
