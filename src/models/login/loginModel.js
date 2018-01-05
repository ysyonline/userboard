import * as loginService from '../../services/login/loginService';
import {routerAction} from '../../utils/common';

export default {
  namespace: 'login',
  state: {
  	authInfo: {errorMessage: null, errorCode: null},
  },
  reducers: {
    init(state, action){
      return {
        authInfo: {errorMessage: null, errorCode: null},
      }
    },
  
  	save(state, {payload} ){
  		const {authInfo} = payload;

  		return Object.assign({}, state, {
  			authInfo: { errorMessage: authInfo.errorMessage, errorCode: authInfo.errorCode }
  		});
  	},
  },
  effects: {
  	*authenticate({payload}, {call, put}){

  		const {data:{authInfo}} = yield call(loginService.authenticate, payload);
      const {token} = authInfo;

      if(token && token.length){
        localStorage.setItem('token', token);
        localStorage.setItem('userName', payload.userName);
        localStorage.setItem('islogin', true);
      }
  		yield put({type: 'save', payload: {authInfo} });
  	},

    *invalidate({payload}, {call, put}){
      const token = localStorage.getItem('token');
     
      const {data:{operation}} = yield call(loginService.invalidate, {token});
      const {resultCode, errors:[]} = operation;
      if(resultCode === 'ok'){
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.setItem('islogin', false);
        yield put(routerAction({pathname: '/'}));
      }
    }
  },
  subscriptions: {
  	setup({dispatch, history}){
      history.listen(location=>{
        const {pathname, search} = location;
        if(pathname.includes('/login') || pathname === '/' ){
         
            dispatch({type:'init'});
          
        }
      });
    }
  },
};
