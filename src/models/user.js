
export default {
  namespace: 'user',
  state: {
  	user: {
  		users: []
  	}
  },
  reducers: {
  	'delete'(state, {payload: {id} }){
  		return Object.assign({}, state, {
  			users: state.users.filter(item=>item.id !== id)
  		});
  	}
  },
  effects: {},
  subscriptions: {},
};
