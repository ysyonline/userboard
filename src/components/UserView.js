import React from 'react';
import styles from './UserView.css';
import PropTypes from 'prop-types';
import {Table, Button, Popconfirm} from 'antd'; 


function UserView(props) {
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
    <Table loading={loading} dataSource={users} columns={columns} rowKey={record=>record.id}/>
  );
}

UserView.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default UserView;
