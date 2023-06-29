import React from 'react'
import styles from './HolyGrailLayout.module.css'

export const HolyGrailLayout = () => {
	return (
		<>
			<div id={styles.head}>头部</div>
			<div className={styles.container}>
				<div id={styles.center} className={styles.column} >主内容栏自适应宽度</div>
				<div id={styles.left} className={styles.column} >侧栏固定宽度1</div>
				<div id={styles.right} className={styles.column}  >侧栏固定宽度2</div>
			</div>
			<div id="footer">底部</div>
		</>
	)
}
