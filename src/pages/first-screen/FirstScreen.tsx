import React from 'react';
import { Programmer } from '../../modules/Programmer/Programmer';

import styles from './FirstScreen.module.css';
import { Heading } from '../../modules/Heading/Heading';
import { About } from '../../modules/About/About';
import { MButton } from '../../ui/Button/MButton';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface FirstScreenProps {}

export const FirstScreen: React.FC<FirstScreenProps> = ({}) => {
	const isMobile = useMediaQuery('(max-width:1050px)');
	return (
		<>
			<div className={styles['first-screen--wrapper']}>
				<section className={styles['first-screen']}>
					<div className={styles['first-screen--about-block']}>
						<Heading />
						{isMobile && <Programmer />}
						<About />
						<MButton
							config={{
								initial: { opacity: 0, y: -200 },
								whileInView: {
									opacity: 1,

									y: 0,
								},
								transition: {
									duration: 2,
									type: 'spring',
								},
								viewport: { once: true },
							}}>
							Action
						</MButton>
					</div>
					{!isMobile && <Programmer />}
				</section>
			</div>
		</>
	);
};
