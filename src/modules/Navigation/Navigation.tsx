import React from 'react';
import { NavigationItem } from './components/NavigationItem/NavigationItem';
import styles from './Navigation.module.css';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
	return (
		<>
			<nav className={styles['nav']}>
				<ul className={styles['nav-list']}>
					<NavigationItem label="Home" link="#home" />
					<NavigationItem label="About" link="#about" />
					<NavigationItem label="Contacts" link="#contacts" />
				</ul>
			</nav>
		</>
	);
};
