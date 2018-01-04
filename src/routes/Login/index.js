import Bundle from '../../common/Bundle';
import {injectModel} from '../../utils/injection';



export default (props) => {
	
	return (
	    <Bundle load={() => import('./LoginRouter')}>
	        {(LoginRouter) => <LoginRouter {...props}/>}
	    </Bundle>
	)
}