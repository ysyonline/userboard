import {Form, Icon, Input, Button, Checkbox } from 'antd'; 
import {routerAction} from '../../utils/common';

import styles from './LoginView.css';

const FormItem = Form.Item;
function LoginForm (props) {

	const {onSubmit} = props;

	const {getFieldDecorator} = props.form;

	function handleSubmit(e){
		e.preventDefault();
		props.form.validateFields((err, values)=>{
			if(!err){
				console.log(values);
				/*dispatch(routerAction({
					pathname: '/home'
				}));*/
				onSubmit(values);
				
			}
		});
	}

	return (
		<Form  onSubmit={handleSubmit}>
			<FormItem>
				{
					getFieldDecorator('userName',{
						rules:[{required: true, message: 'Please input your username'}]
					})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="Username"/>
					)
				}
			</FormItem>
			<FormItem>
				{
					getFieldDecorator('passWord',{
						rules:[{required: true, message: 'Please input password'}]
					})(
						<Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
					)
				}
			</FormItem>
			<FormItem>
				{getFieldDecorator('remember',{
					valuePropName: 'checked',
					initialValue: true
				})(
					<Checkbox>Remember me</Checkbox>
				)}
				<a className={styles.loginformforgot} href="">Forgot password</a>
				<Button type="primary" htmlType="submit" className={styles.loginformbutton}>
					Log in
				</Button>
				Or <a href="">register now!</a>
			</FormItem>
		</Form>

	);


}

export default Form.create()(LoginForm);