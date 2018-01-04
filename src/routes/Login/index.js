import Bundle from '../../common/Bundle';
import {injectModel} from '../../utils/injection';



export default (props) => {
	injectModel(require('../../models/login/loginModel.js'));
	return (
	    <Bundle load={() => import('./LoginRouter')}>
	        {(LoginRouter) => <LoginRouter {...props}/>}
	    </Bundle>
	)
}