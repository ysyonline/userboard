import * as loginService from '../../services/login/loginService';
import {search4Obj} from '../../utils/common';

export default {
  namespace: 'login',
  state: {
  	authInfo: {token: null, errorMessage: null, errorCode: null},
    userInfo: null,
  },
  reducers: {
    init(state, action){
      return {
        authInfo: {token: null, errorMessage: null, errorCode: null},
        userInfo: null,
      }
    },
  	save(state, {payload} ){
  		const {authInfo, userInfo} = payload;

  		return Object.assign({}, state, {
  			authInfo: {...state.authInfo, ...authInfo},
        userInfo: {...state.userInfo, ...userInfo}
  		});
  	},
    clearErrorMessage(state,{payload:{errorMessage}}){
      return Object.assign({}, state, {
       authInfo: {...state.authInfo, errorMessage},
      })
    }
  },
  effects: {
  	*authenticate({payload}, {call, put}){
  		
  		const {data:{authInfo}} = yield call(loginService.authenticate, payload);

  		yield put({type: 'save', payload: {authInfo, userInfo: payload} });
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
