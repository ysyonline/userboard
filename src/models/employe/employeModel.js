import * as employeService from '../../services/employe/employeService';
import {search4Obj} from '../../utils/common';

export default {
  namespace: 'employe',
  state: {
  	list: [],
    total: null,
    current: null
  },
  reducers: {
    save(state, {payload }){
      return {...state, ...payload};
    },
    'delete'(state, {payload}){
      return Object.assign({}, state, {
        list: state.list.filter(item=>item.id !== payload.id)
      });
    },
  },
  effects: {
  	*fetch({payload:{current = 1}},{call, put}){
      const {data} = yield call(employeService.query, {current} );
      yield put({type:'save', payload: {...data, current} });
    },
    *edit({payload}, {call, put}){
      yield call(employeService.update, payload);
      yield put({type: 'reload'});
    },
    *create({payload: values }, {call, put}){
      yield call(employeService.put, values );
      yield put({type: 'reload'});
    },
    *reload(action, {put, select}){
      const current = yield select((state)=>state.employe.current);
      yield put({type:'fetch', payload:{current}});
    }
  },
  subscriptions: {
  	setup({dispatch, history}){
  		history.listen(location=>{
        const {pathname, search} = location;
  			if(pathname.includes('/employe') ){
  				dispatch({type:'fetch',  payload: search4Obj(search) });
  			}
  		});
  	}
  },
};
