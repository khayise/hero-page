import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import styles from './Button.module.css';

interface MButtonProps {
	children?: React.ReactNode;
	config?: HTMLMotionProps<'button'>;
}

export const MButton: React.FC<MButtonProps> = ({ children, config }) => {
	return (
		<>
			<motion.button className={styles['button']} {...config}>
				<span className={styles['button-text']}>{children}</span>
			</motion.button>
		</>
	);
};
