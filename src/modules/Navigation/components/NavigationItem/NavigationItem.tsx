import React from 'react';

import styles from './NavigationItem.module.css';

interface NavigationItemProps {
	link: string;
	label: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ link, label }) => {
	return (
		<>
			<li className={styles['navigation-item']}>
				<a href={link}>{label}</a>
			</li>
		</>
	);
};
