import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'dva/router';
import PropTypes from 'prop-types';

function Header ({location}) {
	const MenuItem = Menu.Item;

	return(
		<Menu
			selectedKeys={[location.pathname]}
			mode="horizontal"
			theme="dark"
		>
			<MenuItem key="/users">
				<Link to="/users"><Icon type="bars"/>Users</Link>
			</MenuItem>
			<MenuItem key="/">
				<Link to="/"><Icon type="home"/>Home</Link>
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
		</Menu>
	);
}

export default Header;