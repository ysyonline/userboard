import Bundle from '../../common/Bundle';
import {injectModel} from '../../utils/injection';



export default (props) => {
	injectModel(require('../../models/employe/employeModel.js'));
	return (
	    <Bundle load={() => import('./EmployeRouter')}>
	        {(EmployeRouter) => <EmployeRouter {...props}/>}
	    </Bundle>
	)
}