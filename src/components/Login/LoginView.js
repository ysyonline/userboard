import React from 'react';
import {connect} from 'dva';

import LoginForm from './LoginForm';

import styles from './LoginView.css';

function LoginView (props) {
	
	return(
		<div className={styles.normal}>
			<LoginForm {...props}/>
		</div>
	);
}

export default connect()(LoginView);

