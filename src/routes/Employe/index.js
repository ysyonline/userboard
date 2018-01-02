import Bundle from '../../common/Bundle';

export default (props) => {
	//注册model
	//registerModel(require('./models/user'));
	//动态加载
	return (
	    <Bundle load={() => import('./EmployRouter')}>
	        {(EmployRouter) => <EmployRouter {...props}/>}
	    </Bundle>
	)
}