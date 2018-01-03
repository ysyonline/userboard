import Bundle from '../../common/Bundle';
import {injectModel} from '../../utils/injection';



export default (props) => {
	injectModel(require('../../models/user/userModel.js'));
	return (
	    <Bundle load={() => import('./UserRouter')}>
	        {(UserRouter) => <UserRouter {...props}/>}
	    </Bundle>
	)
}