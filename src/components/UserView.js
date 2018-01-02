import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { routerAction } from '../utils/common.js';
import {Table, Pagination, Button, Popconfirm} from 'antd'; 
import styles from './UserView.css';

import UserModal from './UserModal';

function UserView(props) {

  const {dispatch} = props;

  function paginationHandler (pagination) {

    return dispatch(routerAction({
      pathname: '/users',
      search:pagination,
      query:pagination
    }));
  }

  function handleDelete (id) {
    dispatch({type: 'user/delete', payload: {id} })
  }
  
  function handleEdit (id, values) {
    dispatch({type: 'user/edit', payload: {id, values} })
  }
 
 function handleCreate (values) {
    dispatch({type: 'user/create', payload: {values} })
  }


  const columns = [{
    	title: 'Name',
    	dataIndex: 'name',
    },{
    	title: 'Age',
    	dataIndex: 'age',
    },{
      title: 'Website',
      dataIndex: 'website',
    },{
    	title: 'Actions',
    	render:(text, record)=>{
    		return (
          <div className={styles.operation}>
            <UserModal record={record} onOk={(values)=>handleEdit(record.id,values) }>
              <Button>Edit</Button>
            </UserModal>
      			<Popconfirm title="Delete?" onConfirm={()=>handleDelete(record.id)}>
      				<Button>Delete</Button>
      			</Popconfirm>
          </div>
    		)
    	}
  }];

  const pagination = {
    total: props.total,
    current: props.page,
    pageSize: 5
  }

  return (
    <div>
      <div className={styles.create}>
        <UserModal record={{}} onOk={(values)=>handleCreate(values) }>
          <Button type="primary">Create</Button>
        </UserModal>
      </div>
      <Table 
          loading={props.loading} 
          dataSource={props.users} 
          columns={columns} 
          rowKey={record=>record.id}
          pagination={pagination}
          onChange={paginationHandler} />
    </div>
  );
}



    /*
      <Pagination
          total={props.total}
          //showQuickJumper={true}
          showTotal={total => `Total ${props.total} items`}
          current={props.page}
          pageSize={5}
          onChange={paginationHandler} />*/
function mapStateToProps(state) {
  return {
    loading: state.loading.models.user,
    users: state.user.users,
    page: state.user.page,
    total: state.user.total
  };
}

export default connect(mapStateToProps)(UserView);
