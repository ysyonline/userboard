import Bundle from '../../common/Bundle';
import {injectModel} from '../../utils/injection';



export default (props) => {
	//injectModel(require('../../models/home/employeModel.js'));
	return (
	    <Bundle load={() => import('./HomeRouter')}>
	        {(HomeRouter) => <HomeRouter {...props}/>}
	    </Bundle>
	)
}