
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
  effects: {
  	*fetch({page = 1},{call, put}){
  		console.log(page);
  	}

  },
  subscriptions: {
  	setup({dispatch, history }){
  		history.listen(location=>{
  			if(location.pathname === '/user'){
  				dispatch({type:'fetch', payload:{page: 1} });
  			}
  		});

  	}
  },
};
