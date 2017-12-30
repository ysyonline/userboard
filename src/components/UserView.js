import React from 'react';

import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router';
import {Table, Pagination, Button, Popconfirm} from 'antd'; 
import styles from './UserView.css';

//import {createBrowserHistory} from 'history';

//const history = createBrowserHistory();

const PAGE_SIZE = 5;

function UserView(props) {


  function pageChangeHandler (page) {
    console.log(routerRedux);
      const action = routerRedux.push({
        pathname: '/users',
        search: `?page=${page}`
      });
      return props.dispatch(action);
  }


  let {loading, onDelete, users} = props;
  
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
  			<Popconfirm title="Delete?" onConfirm={()=>onDelete(record.id)}>
  				<Button>Delete</Button>
  			</Popconfirm>
  		)
  	}
  }];


  return (
    <div>
      <Table 
          loading={loading} 
          dataSource={users} 
          columns={columns} 
          rowKey={record=>record.id}
          pagination={false}/>

      <Pagination
          total={85}
          showTotal={total => `Total ${total} items`}
          current={props.page}
          pageSize={20}
          onChange={pageChangeHandler} />
    </div>
  );
}

UserView.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default UserView;
