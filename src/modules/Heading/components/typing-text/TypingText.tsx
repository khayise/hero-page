import React, { useEffect, useState } from 'react';
import styles from './TypingText.module.css';

interface TypingTextProps {}

const words = ['innovation', 'business', 'communication', 'healthcare', 'education'];
const typingSpeed = 150;

export const TypingText: React.FC<TypingTextProps> = ({}) => {
	const [text, setText] = useState(words[0]);
	const [wordIndex, setWordIndex] = useState(1);
	const [isDeleting, setIsDeleting] = useState(true);
	const [speed, setSpeed] = useState(typingSpeed);
	const [isFirstRender, setIsFirstRender] = useState(true);

	useEffect(() => {
		const currentWord = words[wordIndex];
		let timeout: number;
		const delay = 3000;

		if (isFirstRender) {
			timeout = setTimeout(() => {
				setIsFirstRender(false);
			}, delay);
			return () => clearTimeout(timeout);
		}

		if (isDeleting) {
			timeout = setTimeout(() => {
				setText((prev) => prev.slice(0, -1));
				setSpeed(typingSpeed / 2);
			}, speed);
		} else {
			timeout = setTimeout(() => {
				setText(currentWord.slice(0, text.length + 1));
				setSpeed(typingSpeed);
			}, speed);
		}

		if (!isDeleting && text === currentWord) {
			timeout = setTimeout(() => {
				setIsDeleting(true);
			}, delay);
		}

		if (isDeleting && text === '') {
			timeout = setTimeout(() => {
				setIsDeleting(false);
				setWordIndex((prev) => (prev + 1) % words.length);
			}, delay / 2);
		}

		return () => clearTimeout(timeout);
	}, [text, isDeleting, wordIndex, isFirstRender]);
	return (
		<>
			<span className={`${styles['typing-text']} ${styles['typing-text__blink']} `}>{text}</span>
		</>
	);
};
