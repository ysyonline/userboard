import React from 'react';
import {connect} from 'dva';

import LoginForm from './LoginForm';

import {Spin} from 'antd';
import styles from './LoginView.css';

function LoginView (props) {
	
	const {loading} = props;

	return(
		<div className={styles.normal}>
			<Spin 
				spinning={typeof loading === 'undefined'? false : loading} 
				tip="loading..."
				delay={200}
				style={{right:'50px', bottom: '70px'}}
			>
				<LoginForm {...props}/>
			</Spin>
		</div>
	);
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.login
  };
}

export default connect(mapStateToProps)(LoginView);

