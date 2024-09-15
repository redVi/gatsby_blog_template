import React from 'react'
import { Link } from 'gatsby'
import './logo.css'

export const Logo = ({ extraStyles }: Logo) => (
  <Link to="/" className={['logo', extraStyles].join(' ')} aria-label="Домой">
    <svg className="icon icon_logo" width="40" height="40" preserveAspectRatio="xMinYMax meet">
      <use xlinkHref="#site-logo" />
    </svg>
  </Link>
)

type Logo = {
  extraStyles?: string
}
