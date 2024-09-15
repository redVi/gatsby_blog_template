import React from 'react'
import * as styles from './theme-switcher.module.css'

const onThemeToggle = () => {
  const root = document.getElementsByTagName('body')[0]
  root.classList.toggle('inverted')
}

export default function ThemeSwitcher() {
  return (
    <button
      type="button"
      className={styles.themeSwitcher}
      aria-label="Изменить тему"
      onClick={onThemeToggle}
    >
      <svg className="icon icon_theme">
        <use xlinkHref="#theme" />
      </svg>
    </button>
  )
}
