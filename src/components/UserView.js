import React from 'react';
import styles from './UserView.css';
import PropTypes from 'prop-types';
import {Table, Button, Popconfirm} from 'antd'; 


function UserView({onDelete, users}) {
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
  			<Popconfirm title="Delete?" onConfirm={onDelete}>
  				<Button>Delete</Button>
  			</Popconfirm>
  		)
  	}
  }];


  return (
    <Table dataSource={users} columns={columns} />
  );
}

UserView.propTypes = {

};

export default UserView;
