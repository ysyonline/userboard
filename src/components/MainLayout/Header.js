import React from 'react';
import {Menu, Icon, Avatar} from 'antd';
import {Link} from 'dva/router';
import PropTypes from 'prop-types';

//import {routerAction} from '../../utils/common'
//import history from '../../utils/history'


function Header ({location, dispatch, history}) {
	const MenuItem = Menu.Item;

	function invalidate(e){
	     e.preventDefault();
		 dispatch({type:'login/invalidate'});
	}

	return(
		<Menu
			selectedKeys={[location.pathname]}
			mode="horizontal"
			theme="dark"
		>
			<MenuItem key="/users">
				<Link to="/users"><Icon type="bars"/>Users</Link>
			</MenuItem>
			<MenuItem key="/home">
				<Link to="/home"><Icon type="home"/>Home</Link>
			</MenuItem>
			<MenuItem key="/404">
				<Link to="/page-you-dont-know"><Icon type="frown-circle"/>404</Link>
			</MenuItem>
			<MenuItem key="/dva">
				<a href="https://github.com/dvajs/dva" target="_blank">dva</a>
			</MenuItem>
			<MenuItem key="/employe">
				<Link to="/employe"><Icon type="bars"/>Employe</Link>
			</MenuItem>
			
			<MenuItem key="/logout"  style={{float:'right'}}>
				<a href="" onClick={invalidate}>log out</a>
			</MenuItem>
			<MenuItem key="/avatar" style={{float:'right'}}>
				<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{height:'28px', width:'28px', top:'9px'}}/>
			</MenuItem>
		</Menu>
	);
}

export default Header;