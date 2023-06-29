import React from 'react';
import styles from './MarginCollapsing.module.css'

export const MarginCollapsing = () => {
	return (
		<>
			<div className={styles.blue}></div>
			<div className={styles['red-outer']}>
				<div className={styles['red-inner']}>red inner</div>
			</div>
		</>
	)
}