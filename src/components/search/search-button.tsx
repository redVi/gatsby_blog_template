import React from 'react'
import { SearchProps } from './types'

export const SearchButton = ({ toggleForm, isFormOpened }: SearchProps) => (
  <button
    type="button"
    onClick={toggleForm}
    className={
      ['searchForm__button', isFormOpened ? 'searchForm__button_close' : '']
    .join(' ')}
    aria-label="Поиск"
  >
    <svg className="icon icon_search">
      <use xlinkHref="#search" />
    </svg>
  </button>
)
