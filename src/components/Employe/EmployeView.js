import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { routerAction } from '../../utils/common.js';

import EmployeModal from './EmployeModal';

import {Table, Pagination, Button, Popconfirm} from 'antd'; 
import styles from './EmployeView.css';

function EmployeView(props) {

  const {dispatch} = props;

  function paginationHandler (pagination) {

    return dispatch(routerAction({
      pathname: '/employe',
      search:pagination,
      query:pagination
    }));
  }

  function handleDelete (id) {
    dispatch({type: 'employe/delete', payload: {id} })
  }
  
  function handleEdit (id, values) {
    dispatch({type: 'employe/edit', payload: {id, values} })
  }
 
 function handleCreate (values) {
    dispatch({type: 'employe/create', payload: {values} })
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
             	<EmployeModal record={record} onOk={(values)=>handleEdit(record.id,values) }>
              		<Button>Edit</Button>
            	</EmployeModal>
      			<Popconfirm title="Delete?" onConfirm={()=>handleDelete(record.id)}>
      				<Button>Delete</Button>
      			</Popconfirm>
          </div>
    		)
    	}
  }];

  const pagination = {
    total: props.total,
    current: props.current,
    pageSize: 5
  }

  return (
    <div>
      <div className={styles.create}>
		    <EmployeModal record={{}} onOk={(values)=>handleCreate(values) }>
            <Button type="primary">Create</Button>
        </EmployeModal>
      </div>
      <Table 
          loading={props.loading} 
          dataSource={props.list} 
          columns={columns} 
          rowKey={record=>record.id}
          pagination={pagination}
          onChange={paginationHandler} />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    loading: state.loading.models.employe,
    list: state.employe.list,
    current: state.employe.current,
    total: state.employe.total
  };
}

export default connect(mapStateToProps)(EmployeView);
