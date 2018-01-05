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
		this.state = {
			messageVisiable: false
		}
	}

	componentWillMount(){
		const isLogin = this.checkIsLogin();
		if(isLogin) this.redirect('/home');
	}
	componentWillReceiveProps(props){
		const {loading, authInfo: {errorCode}} = props;

		if (!loading && errorCode) {
			this.errorMessage.show();
		};
		if(errorCode === "" ){
			this.redirect('/home');
		}
	}

	redirect(pathname){
		this.props.dispatch(routerAction({
				pathname: pathname
		}));
	}

	checkIsLogin(){
		const token = localStorage.getItem('token');
		return token && token.length;
	}

	onClose(e){
		this.errorMessage.hide();
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
							this.state.messageVisiable? 
							<Alert message={errorMessage} type="error" closable onClose={this.onClose}/> :
							null
						}
						<LoginForm onSubmit={this.handleSubmit} />
					</div>
				</Spin>
			</div>
		);
	}
	

	errorMessage = {
		show: ()=>this.setState({messageVisiable: true}),
		hide: ()=>this.setState({messageVisiable: false})
	}

}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.login,
    authInfo: state.login.authInfo
  };
}

export default connect(mapStateToProps)(LoginView);

