import * as loginService from '../../services/login/loginService';
import {search4Obj} from '../../utils/common';

export default {
  namespace: 'login',
  state: {
  	userInfo: {token: null, userName: null, remember: null, passWord: null},
  },
  reducers: {
  	save(state, {payload}){
  		const {userInfo} = payload;
  		return Object.assign({}, state, {
  			userInfo: {...state.userInfo, ...userInfo}
  		});
  	}
  },
  effects: {
  	*authenticate({payload}, {call, put}){
  		
  		const {data} = yield call(loginService.authenticate, payload);
  		yield put({type: 'save', payload: {...data} });
  	}
  },
  subscriptions: {
  	
  },
};
