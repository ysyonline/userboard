import * as userService from '../services/userService';
import {search4Obj} from '../utils/common';

export default {
  namespace: 'user',
  state: {
  	users: [],
    total: null,
    page: null
  },
  reducers: {
  	save(state, {payload: {users, total, page} }){
  		return {...state, users, total, page};
  	},
  	'delete'(state, {payload}){
  		return Object.assign({}, state, {
  			users: state.users.filter(item=>item.id !== payload.id)
  		});
  	},
  },
  effects: {
  	*fetch({data:{page = 1}},{call, put}){
  		const {data:{users, total}} = yield call(userService.query, {page} );
  		yield put({type:'save', payload: {users, total, page } });
  	},
    *edit({payload}, {call, put}){
      yield call(userService.update, payload);
      yield put({type: 'reload'});
    },
    *create({payload: values }, {call, put}){
      yield call(userService.put, values );
      yield put({type: 'reload'});
    },
    *reload(action, {put, select}){
      const page = yield select((state)=>state.user.page);
      yield put({type:'fetch', data:{page}});
    }

  },
  subscriptions: {
  	setup({dispatch, history}){
  		history.listen(location=>{
        const {pathname, search} = location;
  			if(pathname.includes('/users') ){
  				dispatch({type:'fetch',  data: search4Obj(search) });
  			}
  		});
  	}
  },
};
