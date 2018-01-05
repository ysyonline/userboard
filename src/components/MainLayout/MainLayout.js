import React from 'react';
import Header from './Header';
import styles from './MainLayout.css';

function MainLayout (props) {

	return (
		<div className={styles.normal}>
			<Header {...props}/>
			<div className={styles.content}>
				<div className={styles.main}>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
