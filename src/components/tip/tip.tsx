import React from 'react'
import * as styles from './tip.module.css'

/**
function createMarkup (text) {
  return { __html: text }
}
*/

export const Tip = ({ type, heading = 'Примечание', children }: TipProps) => (
  <div className={[styles.tip, styles[type]].join(' ')}>
    <p className={styles.heading}>{heading}</p>
    <p>{children}</p>
    {/* <div dangerouslySetInnerHTML={createMarkup(children)} /> */}
  </div>
)

type TipProps = {
  type: string
  heading?: string
  children?: React.ReactElement
}
