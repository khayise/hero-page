import React from 'react';
import { TypingText } from './components/typing-text/TypingText';
import styles from './Heading.module.css';
import { motion } from 'framer-motion';

interface HeadingProps {}

export const Heading: React.FC<HeadingProps> = ({}) => {
	return (
		<>
			<motion.h1
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className={styles['heading']}>
				We build technology that empowers ideas and transforms the future of <TypingText />
			</motion.h1>
		</>
	);
};
