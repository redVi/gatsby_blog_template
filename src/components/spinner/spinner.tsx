import React from 'react'
import styles from './spinner.module.css'

export const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.bounce1} />
    <div className={styles.bounce2} />
    <div className={styles.bounce3} />
  </div>
)
