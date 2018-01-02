import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { routerAction } from '../utils/common.js';
import {Table, Pagination, Button, Popconfirm} from 'antd'; 
import styles from './UserView.css';

function UserView(props) {

  const {dispatch} = props;

  function paginationHandler (page, pageSize) {

    return dispatch(routerAction({
      pathname: '/users',
      search:{ page, pageSize },
      query:{ page, pageSize }
    }));
  }

  function handleDelete (id) {
    dispatch({type: 'user/delete', payload: {id} })
  }
  
  const columns = [{
    	title: 'Name',
    	dataIndex: 'name',
    },{
    	title: 'Age',
    	dataIndex: 'age',
    },{
    	title: 'Actions',
    	render:(text, record)=>{
    		return (
    			<Popconfirm title="Delete?" onConfirm={()=>handleDelete(record.id)}>
    				<Button>Delete</Button>
    			</Popconfirm>
    		)
    	}
  }];


  return (
    <div>
      <Table 
          loading={props.loading} 
          dataSource={props.users} 
          columns={columns} 
          rowKey={record=>record.id}
          pagination={false}/>

      <Pagination
          total={props.total}
          //showQuickJumper={true}
          showTotal={total => `Total ${props.total} items`}
          current={props.page}
          pageSize={5}
          onChange={paginationHandler} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.user,
    users: state.user.users,
    page: state.user.page,
    total: state.user.total
  };
}

export default connect(mapStateToProps)(UserView);
