import React from 'react';
import styles from './Header.module.css';
import { Navigation } from '../Navigation/Navigation';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<>
			<header className={styles['header']}>
				<div className={styles['header-container']}>
					<Navigation />
				</div>
			</header>
		</>
	);
};
