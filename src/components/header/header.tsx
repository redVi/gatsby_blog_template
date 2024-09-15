import React, { useState, useEffect, useCallback } from 'react'
import { Search, Logo, ThemeSwitcher, Tags } from 'components'
import './header.css'

export const Header = () => {
  const [isFormOpened, setIsFormOpened] = useState(false)
  const [isMenuOpened, setMenuOpened] = useState(false)

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened)
  };

  const toggleMenu = () => {
    setMenuOpened(!isMenuOpened)
  }

  const keyEscapeListener = function (event: KeyboardEvent) {
    if (event.key === 'Escape' && isFormOpened) toggleForm()
  };

  const keyEscapeListenerCallback = useCallback(keyEscapeListener, [keyEscapeListener])

  useEffect(() => {
    document.addEventListener('keydown', keyEscapeListenerCallback, false)
    return () => {
      document.removeEventListener('keydown', keyEscapeListenerCallback, false)
    }
  }, [keyEscapeListenerCallback])

  return (
    <header className="header">
      <Logo extraStyles="header__logo" />
      <Tags extraStyles={isMenuOpened ? '' : 'header__tags'} />
      <button
        type="button"
        onClick={toggleMenu}
        className="header__tagsSwitcher"
        aria-label="Меню"
      >
        <svg className="icon icon_menu">
          <use xlinkHref="#menu" />
        </svg>
      </button>
      <ThemeSwitcher />
      <Search isFormOpened={isFormOpened} toggleForm={toggleForm} />
    </header>
  )
}
