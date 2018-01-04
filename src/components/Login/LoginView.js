import React, { Component } from 'react';
import {connect} from 'dva';
import {routerAction} from '../../utils/common';


import LoginForm from './LoginForm';
import {Spin, Alert} from 'antd';


import styles from './LoginView.css';

class LoginView extends Component {
	
	constructor(props){
		super(props);
		this.onClose = this.onClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillUpdate(props){
		const {dispatch, authInfo: {errorCode}} = props;
		if(errorCode === "" ){
			dispatch(routerAction({
				pathname: "/home"
			}) );
		}
	}

	onClose(e){
		console.log(e, 'i was closed');
		this.props.dispatch({type:"login/clearErrorMessage", payload:{errorMessage: ''} });
	}

	handleSubmit(values){

		this.props.dispatch({type: 'login/authenticate', payload: values });
	}


	render(){
		const {loading, authInfo: {errorMessage, errorCode}} = this.props;

		return(
			<div className={styles.normal}>
				<Spin 
					spinning={typeof loading === 'undefined'? false : loading} 
					tip="loading..."
					delay={200}
					style={{right:'50px', bottom: '70px'}}
				>
					<div className={styles.logintable}>
						{
							errorMessage && errorMessage.length? 
							<Alert message={errorMessage} type="error" closable onClose={this.onClose}/> :
							null
						}
						<LoginForm onSubmit={this.handleSubmit} />
					</div>
				</Spin>
			</div>
		);
	}
	
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.login,
    authInfo: state.login.authInfo
  };
}

export default connect(mapStateToProps)(LoginView);

