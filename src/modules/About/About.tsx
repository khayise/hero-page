import React from 'react';
import styles from './About.module.css';
import { motion, Variants } from 'framer-motion';

interface AboutProps {}

const variants: Variants = {
	initial: {
		opacity: 0,
		x: -100,
	},
	animate: {
		opacity: 1,
		x: 0,
	},
};

const duration = 2;
const type = 'spring';

export const About: React.FC<AboutProps> = ({}) => {
	return (
		<>
			<motion.p
				variants={variants}
				initial={'initial'}
				whileInView={'animate'}
				viewport={{ once: true }}
				transition={{ delay: 0.1, duration: duration, type: type }}
				className={styles['text--block-paragraph']}>
				We build technology that empowers ideas and transforms the future of innovation. At our
				core, we believe that powerful technology starts with powerful thinking — and we're here to
				bring that thinking to life.
			</motion.p>
			<motion.p
				variants={variants}
				initial={'initial'}
				whileInView={'animate'}
				viewport={{ once: true }}
				transition={{ delay: 0.3, duration: duration, type: type }}
				className={styles['text--block-paragraph']}>
				We're a team of engineers, designers, and strategists united by a common goal: to turn bold
				ideas into real-world impact. Whether it's a startup shaping its first product or an
				established company reimagining its digital presence, we partner closely with our clients to
				build solutions that are scalable, human-centered, and future-ready.
			</motion.p>
			<motion.p
				variants={variants}
				initial={'initial'}
				whileInView={'animate'}
				viewport={{ once: true }}
				transition={{ delay: 0.5, duration: duration, type: type }}
				className={styles['text--block-paragraph']}>
				Our approach blends creativity with precision. We don’t just write code — we solve problems,
				unlock possibilities, and build experiences that last. From web and mobile applications to
				custom platforms and emerging tech, we deliver with purpose and passion.
			</motion.p>
			<motion.p
				variants={variants}
				initial={'initial'}
				whileInView={'animate'}
				viewport={{ once: true }}
				transition={{ delay: 0.7, duration: duration, type: type }}
				className={styles['text--block-paragraph']}>
				Let’s build what’s next — together.
			</motion.p>
		</>
	);
};
